- Exercício 1 

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números? 

Sim, ao usar strings você pode misturar números e letras.  

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 

 ```tsx
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }
 ```

  - Exercício 2
    
    Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
    
    - os dados que serão salvos no token (no nosso caso, o id);
    - a chave secreta usada pra criptografar o token;
    - algumas configurações, como o tempo de expiração
    
    Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:
    
    ```tsx
    import * as jwt from "jsonwebtoken";
    
    const expiresIn = "1min"
    
    const generateToken = (id: string): string => {
      const token = jwt.sign(
        {
          id
        },
        process.env.JWT_KEY as string,
        {
          expiresIn
        }
      );
      return token;
    }
    ```
    
    a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
    
    A linha "as string" pede para o TypeScript considerar a informação do jwt como uma string, porque existe uma possibilidade de ela ser tipada como "jwt"

    b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*

    ```tsx
   import * as jwt from "jsonwebtoken";

  const expiresIn = "1min";
  const generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }
}

type AuthenticationData = {
  id: string;
}
  ```

- Exercício 3

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*

c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*

``` tsx
      app.post("/user/signup", async (req: Request, res: Response) => {
          try {
              if (!req.body.email || req.body.email.indexOf("@") === -1) {
                  throw new Error ("Email inválido");
              }
              if (!req.body.password || req.body.password.length < 6) {
                  throw new Error ("Senha inválida")
              }
              const dadosUsuario = {
                  email: req.body.email,
                  password: req.body.password
              };
              const id = generateId();
              
              await criarUsuario(id, dadosUsuario.email, dadosUsuario.password);
              const token = generateToken({
                  id,
              })
              res.status(200).send({token})
          } catch (err) {
              res.status(400).send({
                  messagem: err.message
              })
          }
      })
      ```

      - Exercício 4
    
    No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. 
    
    a) *Crie uma função que retorne as informações de um usuário a partir do email*

    ``` tsx
   const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}
```

