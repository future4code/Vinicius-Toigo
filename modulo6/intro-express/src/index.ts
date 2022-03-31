import express,{Request,Response} from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

// - Exercício 1
    
//     Faça a instalação e configuração do Express na pasta do exercício. 
//     Para testar, crie um endpoint que aponte para a URL base da API. 
//     Esse endpoint pode responder apenas com um status ou mensagem fixa.

app.get("/",(req :Request,res: Response)=>{

    res.status(200).send("HELLO WORLD")
    
})

app.listen(3003,()=>{
    console.log("Server rodando")
})

// - Exercício 2
    
//     Acesse a API do JSONPlaceholder e observe os endpoints
//     que buscam usuários. No seu projeto, crie uma variável
//     de tipo para representar esse recurso. Eles devem possuir 
//     as seguintes propriedades:
    
//     - id
//     - name
//     - phone
//     - email
//     - website

type Users = {

	id:number,
	name:string,
	phone:string,
	email:string,
	website:string,
    
}

// Exercício 3
// Crie um array de usuários para servir como base de dados da nossa API. 
// Insira nele quantos objetos quiser. Não se esqueça de fazer a tipagem correta desse array.

const usuarios : Users[] = [

    {id:1,name:'Vinicius',phone:'4002-8922',email:'vinicius@gmail.com',website:'www.vinicius.com.br'},
	{id:2,name:'Pedro',phone:'4003-8923',email:'pedro@gmail.com',website:'www.pedro.com.br'},
    {id:3,name:'Ezequiel',phone:'4004-8924',email:'ezequiel@gmail.com',website:'www.ezequiel.com.br'},
	{id:4,name:'Michael Jackson',phone:'4005-8925',email:'michaeljackson@gmail.com',website:'www.michaeljackson.com.br'}
	
]

// - Exercício 4
    
//     Construa um endpoint que retorne os usuários criados no exercício anterior.
//     Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

app.get('/usuarios',(req :Request,res: Response)=>{
    const Users=usuarios.map(user=>user)
    res.status(200).send(usuarios)
    
})


// - Exercício 5
    
//     Acesse a API do JSONPlaceholder e observe os endpoints que buscam posts. 
//     No seu projeto, crie uma variável de tipo para representar esse recurso. Eles
//     devem possuir as seguintes propriedades:
    
//     - id
//     - title
//     - body
//     - userId

type Posts = {

	id:number,
	title:string,
	body:string,
	userId:number,
  
}

// - Exercício 6
    
//     Crie um array de posts para incrementar a base de dados da nossa API. 
//     Você acha melhor criá-los dentro ou fora do array de usuários? 
//     Justifique com comentários no código.
//     Não se esqueça de fazer a tipagem correta desse array.

//     Resposta : Creio que criá-los fora do array de usuarios possa deixar mais organizado ...



const postsDosUsuarios : Posts[] = [

    {id:1,title:'Foto Legal',body:'Foto 1',userId:1},
    {id:1,title:'Foto Sensacional',body:'Foto 2',userId:2},
    {id:1,title:'Foto Impressionante',body:'Foto 3',userId:3},
    {id:1,title:'Foto Aleatória',body:'Foto 4',userId:4},
	
]

// - Exercício 7
    
//     Construa um endpoint que retorne os posts criados no exercício anterior.


app.get('/posts',(req :Request,res: Response)=>{
    if(!postsDosUsuarios.length){
        res.status(401).send("Não tem posts.")
     }
    res.status(201).send(postsDosUsuarios)
    
})

// - Exercício 8
    
//     Construa um endpoint que retorne os posts de um usuário em particular.


app.get("/post/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = postsDosUsuarios.filter((post) => {
      
    })

    if(!user) {
        return res.status(400).send("Entre com userId válido.")
     } else if(post.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
     }
        
        res.status(201).send(post)   
})


