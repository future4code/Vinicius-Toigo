- Exercício 5
    
    Agora, vamos implementar o endpoint de login, com as seguintes especificações:
    
    - *Verbo/Método*: POST
    - *Path*: `/user/login`
    - *Input:* O body da requisição deve ser
        
        ```json
        {
        	"email": "email do usuário",
        	"password": "senha do usuário"
        }
        ```
        
    - *Output*: O body da resposta deve ser
        
        ```json
        {
        	"token": "token gerado pelo jwt"
        }
        ```
        
    
    a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
    
    b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*

 ``` tsx
    app.post("/user/login", async (req: Request, res: Response) => {
      try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };


    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }

    
    const token = generateToken({
      id: user.id,
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

- Exercício 6
    
    Ufa, agora temos toda a nossa base pronta para identificar o usuário. Antes de prosseguir, precisamos criar uma função que recebe o token e devolve as informações do usuário salvas nele. Veja o exemplo abaixo:
    
    ```tsx
    const expiresIn = "1min";
    
    const getData = (token: string): AuthenticationData => {
      const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
      const result = {
        id: payload.id,
      };
      return result;
    };
    ```
    
    a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*
    
     A linha as any, assim como a linha "as string" da questão dois, fala ao typescript para considerar o tipo da variável payload como qualquer tipo. É necessário utilizar para não der erro de tipagem.

    b) *Crie uma função que realize a mesma funcionalidade da função acima*

 ```tsx
import * as jwt from "jsonwebtoken";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

- Exercício 7
    
    Agora, vamos criar um endpoint que retorne as informações do usuário logado. As especificações dele estão abaixo:
    
    - *Verbo/Método*: GET
    - *Path*: `/user/profile`
    - *Input:* Deve receber, nos headers, o token de autenticação:
        
        ```
        Authorization: token.do.usuario
        ```
        
    - *Output*: O body da resposta deve ser
        
        ```json
        {
        	"id": "id do usuário",
        	"email": "email do usuário"
        }
        ```
        
    
    a) *Comece criando uma função no data que retorne o usuário a partir do id*

    ```tsx
     public async getUserById(id: string): Promise<any> {
    const result = await this.connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }
}
```

    b) *Crie o endpoint com as especificações passadas*

```tsx
    app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

   
    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```