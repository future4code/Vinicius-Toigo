              
                             //Exercícios de interpretação de código

                            // Exercício 1 
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])


// a) O que vai ser impresso no console?

// Matheus Nachtergaele, Virginia Cavendish , Globo / 14 hrs


                        //Exercício 2

                        
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)


//  a) O que vai ser impresso no console?

//  Juca, Juba e Jubo.



//  b) O que faz a sintaxe dos três pontos antes do nome de um objeto ? 

// A sintaxe irá ''puxar'' os dados anteriores.


                           //Exercício 3

 
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))



// a) O que vai ser impresso no console?

// todos os dados da variável 'pessoa' + o resultado do booleano, 
// que seria backender = false . E também altura = undefined. Corrigindo, apenas aparece false (kk)



// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?             

// Sim, pois o console.log está apenas pedindo um dado, se backender é true ou false.




                     // Exercícios de escrita de código



                     // Exercício 1 


// a) Crie um objeto. Ele deve conter duas propriedades: 
// nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).
//  Depois, escreva uma função que recebe como entrada um objeto
//   e imprime uma mensagem no modelo abaixo**:** 


//  const pessoa = {
//    nome: "Vinicius", 
//     apelidos: ["Vinão", "Vitão", "Viney"]


//   }
// console.log('Eu sou Vinicius, mas pode me chamar de: Vinão, Vitão ou Viney')


// b) Agora, usando o operador spread, crie um novo objeto mantendo o 
// valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, 
// chame a função feita no item anterior passando como argumento o novo objeto

// const pessoa = {
//       nome: "Vinicius", 
//       apelidos: ["Vinão", "Vitão", "Viney"] ,
//       novosApelidos: ["V", "Jailson" , "Vladimir" ]

// }

//   console.log('Eu sou Vinicius, mas pode me chamar de: V, Jailson e Vladimir')
  




//              Exercício 2 


//a) Crie dois objetos diferentes com as seguintes propriedades:
// nome, idade e profissão.


// b) Escreva uma função que receba esses objetos e 
// retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// const pessoa = { 
//   nome: "Vinicius",
//   idade: 20,
//   profissão : "jogador profissional de freefire"
// }
// minhafuncao(pessoa)
// return ["Vinicius",8 , 20, "jogador profissional de freefire", 9]



//           Exercício 3



// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão.
//  Eles devem ter as seguintes propriedades: nome (`string`)
//   e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que **receba** um objeto fruta 
// por **parâmetro** e coloque-a dentro do array de `carrinho`. 
// Invoque essa função passando os três objetos criados. 


// d) Imprima a variável `carrinho` e garanta que ela 
// agora seja um **array preenchido com três objetos.** 

// const carrinho  =  {

// objetoFruta1: ("Maçã") ,
// objetoFruta2: ("Banana"),
// objetoFruta3: ("Morango"),

// disponibilidade = true

// carrinho.push(objetoFruta1)
// }
            
// console.log(carrinho)


