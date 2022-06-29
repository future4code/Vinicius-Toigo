- Exercício 1
    
    Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.
    
    a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*
    

    ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal" 


    b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

    ```tsx
    import * as jwt from "jsonwebtoken";


    cont expiresIn = "1min";
    const generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
        {
            id: input.id,
            role: input.role,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
        );
        return token;
    }

    const getData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
        id: payload.id,
        role: payload.role,
        };
        return result;
    }


    type AuthenticationData {
    id: string;
    role: string;
    }

    ```

    c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
    
    ```tsx
    app.post("/signup", async (req: Request, res: Response) => {
    try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword, userData.role);

    const token = generateToken({
      id,
      role: userData.role,
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

    d) *Altere o login para criar o token com o `role` do usuário*

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
      id: user.id,
      role: user.role,
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