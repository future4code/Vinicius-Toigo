import express  from "express";
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
  });

// - Exercício 1
    
//     Crie um função que receba uma `string` com o nome 
//     e outra `string` com uma data de nascimento 
//     (ex.: “24/04/1993”). A função deve separar o dia,
//     o mês e ano e retornar uma `string` no seguinte
//     formato:

// const nome:string="Vinícius"
// const dia:number=17
// const mes:string="junho"
// const ano:number=2001


// console.log(`Olá, me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)

const funcaoString = (nome: string, dataNascimento: string): string => {
  const [dia, mes, ano] = dataNascimento.split("/");
  const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
  return frase;
};
console.log(funcaoString("Vinicius", "17/06/2001"));

// - Exercício 2
    
//     Crie uma função que receba um parâmetro 
//     qualquer e que imprima no console o tipo da variável.


const funcaoParam = (variavel: any): void => {
  console.log( typeof variavel);
};
funcaoParam(11);


// - Exercício 3
// Você foi contratado por um serviço de streaming para organizar o sistema de
//  catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome do
//   filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma
//  se limitam aqueles encontrados no seguinte ENUM de gêneros: 

// Além dessas informações presentes em todos os filmes, alguns deles possuem uma
//  informação opcional: 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

// Considerando todas estas informações, crie uma função que receba todas essas
//  informações como parâmetros( 3 essenciais + 1 opcional) e retorne todas
//   informações organizadas em um `type`

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome:string,
    anoLancamento:string | number
    genero: GENERO
    nota? : number
}

function Filmes(
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    nota?: number ):
    
    Filme {
    const filme: Filme = {
        nome,
        anoLancamento,
        genero,
        nota,
    }
    return filme
}
console.log(Filmes("Duna", 2021, GENERO.ACAO, 74))

// Exercício 4

// O seguinte `array` traz as pessoas colaboradoras de uma empresa,
// com seus salários, setores e se trabalham presencialmente ou por home office:

// [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
// ]

// Considerando o `array`acima, crie um `ENUM` para os setores e um `type` 
// para as pessoas colaboradoras. Em seguida, crie uma função que receba este
// `array`como parâmetro e retorne apenas
// as pessoas do setor de marketing que trabalham presencialmente.

enum SETORES {

MARKETING="marketing",
VENDAS="vendas",
FINANCEIRO="financeiro",

}

type colaboradores = {

nome:string,
salario:number, 
setor:SETORES, 
presencial:boolean

}

const listaColaboradores:colaboradores[]=[

	{ nome: "Marcos", salario: 2500, setor:SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor:SETORES.VENDAS, presencial: false},
	{ nome: "Salete", salario: 2200, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: SETORES.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: SETORES.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: SETORES.MARKETING, presencial: true }

]

const funcaoColaboradores = (lista: colaboradores[]): colaboradores[] => {
  const listaFiltrada: colaboradores[] = lista.filter((colaborador) => {
    return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
  });
  return listaFiltrada;
}
console.log(funcaoColaboradores(listaColaboradores))

// - Exercício 5
    
//     Considerando o `array` de usuários abaixo, crie uma 
//     função que receba este `array` como parâmetro e retorne
//     uma lista com apenas os emails dos usuários “admin”.

// [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

enum ROLE {
  USER="user",
  ADMIN="admin",
}

type user = {
  name: string;
  email: string;
  role: ROLE;
};

const Usuarios: user[] = [

	{name: "Rogério", email: "roger@email.com", role:ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role:ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role:ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role:ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role:ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role:ROLE.ADMIN }      
];


const funcaoRetornaEmails =(role:user[]): string[]=>{

  const emailList: string[] = role
  .filter((user) => user.role=== ROLE.ADMIN)
  .map((user)=> user.email)
  return emailList

}

console.log(funcaoRetornaEmails(Usuarios));


// Exercício 6 

// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. 
// Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas
// dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma
// lista contendo todas os débitos realizados pelo cliente. Exemplo:

// entrada
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes 
// precisando de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba 
// este array como parâmetro, atualize o saldo total descontando 
// todos os débitos e retorne apenas os clientes com saldo negativo.

type conta = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const listaClientes: conta [] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
] 

const funcaoDescontaDebito = (lista:conta[]) : conta [] => {

  lista.forEach((cliente)=>{
    const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
    cliente.saldoTotal -= totalDebitos,
    cliente.debitos=[];
  });
  const contasNegativas = lista.filter((conta)=> conta.saldoTotal <0);
  return contasNegativas;


};
console.log(funcaoDescontaDebito(listaClientes));


