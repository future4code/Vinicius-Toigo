- Exercício 2
    
    Na aula anterior, implementamos os endpoints de *signup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso. 
    
    a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
     
    Primeiro deve-se modificar o cadastro, para saber qual é a senha que foi cadastrada em plaintext e depois no login criptografando-a.

    b) *Faça a alteração do primeiro endpoint*

     ```tsx
    app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
  
    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
    });

    res.status(200).send({
      token,
    });
        } catch (err) {
    res.status(400).send({
      message: err.message,
    });
        }
    });
    ```
    c) *Faça a alteração do segundo endpoint*
    
    ```tsx
    app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const compareResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id    
		});

    res.status(200).send({
      token,
    });
        } catch (err) {
    res.status(400).send({
      message: err.message,
    });
        }
    });
    ```

    d) *No exercício da aula anterior, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

    Não, pois este endpoint apenas utiliza do token gerado pelo Login. Este token ainda será gerado no login, independente de qualquer alteração na criptografia de senhas do usuário.