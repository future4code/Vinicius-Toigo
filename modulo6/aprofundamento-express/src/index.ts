import express  from "express";
import { v4 as generateId } from "uuid";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//Exercício 1

// Faça novamente a instalação e configuração do Express na pasta do 
// exercício. Para testar, 
// crie um endpoint que aponte para o path “/ping”. Esse endpoint pode 
// responder apenas com uma mensagem “pong”.

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})


// - Exercício 2
    
//     Acesse a API do JSONPlaceholder e observe os endpoints que 
//     buscam [afazeres](https://jsonplaceholder.typicode.com/todos)
//      (”*to dos”*). 
//     Crie uma variável de tipo para representar cada afazer.

type ToDo={
	userId:number,
	id:number,
	title:string,
	completed:boolean
}

// - Exercício 3
//     Crie um array de afazeres para servir como base de dados da 
//     nossa API e utilize a
//     tipagem desenvolvida no exercício anterior.

const afazeres:ToDo[] = 
[
  {
    "userId": 1,
    "id": 1,
    "title": "Almoçar",
    "completed": true
  },
  {
    "userId": 2,
    "id": 2,
    "title": "Fazer exercícios",
    "completed": false
  }

 ]

//  - Exercício 4
    
//     Construa um endpoint que retorne todos os afazeres do 
//     exercício anterior de acordo com um único status, ou seja, 
//     retorne os afazeres 
//     concluídos ou somente os que ainda estão em andamento.

app.get('/false', (req, res) => {       

  const tarefa = afazeres.filter(
    (tarefa) => tarefa.completed === false
  );
  
  res.send(tarefa)
})

app.get('/true', (req, res) => {       

  const tarefa = afazeres.filter(
    (tarefa) => tarefa.completed === true
  );
  
  res.send(tarefa)
})

// - Exercício 5
    
//     Construa um endpoint de criação de afazer.
//     A resposta deve retornar o array de afazeres atualizado.


app.post('/create', (req, res) => { 

  const userName = req.headers.authorization;
  const tarefaName = req.body.title;

if (!tarefaName) {
  res.status(400).send("Favor informar nome da tarefa no body.");
  return;
}
const novaTarefa = {
  userId: userName,
  id: generateId(),
  title: tarefaName,
  completed: false,
};

res.status(201).send([...afazeres, novaTarefa]);
});

// - Exercício 6
    
//     Construa um endpoint de edição do status de 
//     um afazer, ou seja, de completo para incompleto e vice-versa.

app.put("/todos/:id/completed", (req, res) => {

  const id = Number(req.params.id)

  for (let todo of afazeres) {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
  }

  res.send(afazeres)
})

// - Exercício 7
    
//     Construa um endpoint que 
//     deleta um determinado afazer de acordo com sua id.

app.delete("/todos/:id", (req, res) => {

  const id = Number(req.params.id)

  for (let i = 0; i < afazeres.length; i++) {
    if (afazeres[i].id === id) {
      afazeres.splice(i, 1)
    }
  }

  res.send(afazeres)
})

// - Exercício 8
    
//     Construa um endpoint que retorne todos os
//      afazeres de uma determinada id de usuário.


app.get("/users/:userId/todos", (req, res) => {
  const userId = Number(req.params.userId)

  const result = []

  for (let todo of afazeres) {
    if (todo.userId === userId) {
      result.push(todo)
    }
  }

  res.send(result)
})