import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {users} from './data'

const app= express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

const Erros: { [cave: string]: { status: number, message: string } } = {
	DESCRICAO_NOT_FOUND: { status: 401, message: "a Descrição deve conter somente letras" },
	AGE_NOT_FOUND: { status: 401, message: "O Preco deve conter somente numeros" },
	AGE_IS_ZERO: { status: 401, message: "O Preco nao pode ser zerado" },
	MISSING_PARAMETERS: { status: 422, message: "Alguma informação está faltando. Consulte a documentação." },
	SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" },
}

// - **Exercício 1**
    
//     Vamos começar fazendo um endpoint que busque 
//     todos os usuários de uma lista.

// *a. Qual método HTTP você deve utilizar para isso?*

 // Get

// *b. Como você indicaria a **entidade** que está sendo manipulada?*

// /type/users

// - **Exercício 2**
    
//     Agora, vamos criar um novo endpoint, que busque todos os usuários que 
//     tenham uma propriedade `type` específica, recebendo apenas um `type` 
//     por vez. Após isso, responda:

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users);
});

// *a.* Como você passou os parâmetros de type para a requisição? Por quê?
    
//Resposta : 
//    type user = {
//    id: number,
//    name: string,
//    email: string,
//    type: string,
//    age: number
// }

//     b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

app.get("/users/admin-list", (req:Request,res:Response)=> {
const adminList = users.filter((user) => {
    return user.type === "ADMIN";
  });
  res.status(200).send(adminList)
})

// - **Exercício 3**
    
//      Faça agora um endpoint de busca que encontre um usuário buscando por nome.

app.get("/user/:name", (request: Request, response: Response) => {

    try{
       let nameUser = request.params.name
        let result  = users.find(user => user.name === nameUser);
   
           if (!request.params.name) {
           throw new Error(Erros.MISSING_PARAMETERS.message)
       }
       
       response.status(201).send(result)
   } catch (error: any) {
       switch (error.message) {
           case Erros.MISSING_PARAMETERS.message:
               response.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
               break
           default:
               response.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)
       }
   }     
    })
    

    // Exercício 4
    // Crie um endpoint que use o método POST para 
    // adicionar um item ao nosso conjunto de usuários.

    app.put("/signUser", (request: Request, response: Response) => {
        try {
    
            const { id, name, email, age, type } = request.body;
    
            if ( !name || !email || !age ||!type ) {
                throw new Error(Erros.MISSING_PARAMETERS.message)
            }
            if (typeof name !== 'string') {
                throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
            }
            if (typeof age !== 'number') {
                throw new Error(Erros.AGE_NOT_FOUND.message)
            }
            if (typeof email !== 'string') {
                throw new Error(Erros.DESCRICAO_NOT_FOUND.message)
            }
            const novoUsuario = {
                    id: id,
                    name: name,
                    email: email,
                    type: type,
                    age: age
                }
    
    users.push(novoUsuario);
    console.log(novoUsuario)
    console.log(users)
    
        } catch (error: any) {
            switch (error.message) {
                case Erros.MISSING_PARAMETERS.message:
                    response.status(Erros.MISSING_PARAMETERS.status).send(Erros.MISSING_PARAMETERS.message)
                    break
                case Erros.DESCRICAO_NOT_FOUND.message:
                    response.status(Erros.DESCRICAO_NOT_FOUND.status).send(Erros.DESCRICAO_NOT_FOUND.message)
                    break
                case Erros.AGE_NOT_FOUND.message:
                    response.status(Erros.AGE_NOT_FOUND.status).send(Erros.AGE_NOT_FOUND.message)
                    break
                default:
                    response.status(Erros.SOMETHING_WENT_WRONG.status).send(Erros.SOMETHING_WENT_WRONG.message)
    
            }
        }
        response.status(201).send(users)
    })


