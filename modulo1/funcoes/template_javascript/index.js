//                          Exercícios de interpretação de código


//                          Exercício  1

//function minhaFuncao(variavel) {
//	return variavel * 5
//}

//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//a) O que vai ser impresso no console? 10 e 50.

//b) O que aconteceria se retirasse os dois console.log e simplesmente
//invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

// O código não é entendido pelo computador, aparece a seguinte mensagem ''Uncaught typeError 
// minhaFuncao(...) is not a function.




//                        Exercício 2


// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade

//Esta função retorna as palavras em minúsculo e verifica se possui a palavra cenoura.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//   i.   Eu gosto de cenoura      --> true
// ii.  CENOURA é bom pra vista    --> true
// iii. Cenouras crescem na terra  --> true






//                        Exercícios de escrita de código

//                                   Exercício 1 

// a) A função não deve receber nenhum parâmetro e 
// deve imprimir uma mensagem falando algumas informações sobre você, como: 

// ```
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// ```

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre
//  você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.



                               //   Resolução
//function imprimeInfo () {
  // const resposta = (imprimeInfo)

//}

//console.log ('Eu sou Vinicius, tenho 20 anos, moro em Montauri-RS e sou estudante')




// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de 
// uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) 
// e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as 
// informações da pessoa em uma só mensagem com o template:

// ```
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
// ```

// - Exemplo

//     Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

//     `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`


                                  // Resolução


// function imprimeInfo( [Vinicius], [Idade] , [Montauri] , [Estudante] ,{ 
    

//     minhaFuncao=  ("Eu sou" [Vinicius] , "tenho" [20] ,"anos e moro em" [Montauri], "tambem sou" [Estudante] )

// }

// console.log("Eu sou" [Vinicius], "tenho" [20] "anos e moro em" [Montauri], "tambem sou" [Estudante])




//                                             Exercício 2 

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e retorne o resultado.
//  Invoque a função e imprima no console o resultado.


//const numeroUm =2
//const numeroDois =8

//const soma = numeroUm + numeroDois

//console.log ( soma)



// b) Faça uma função que recebe 2 números e retorne um booleano 
// que informa se o primeiro número é **maior ou igual** ao segundo.

// const numeroUm = 55
// const numeroDois = 45

// const soma = numeroUm + numeroDois
// const booleano = numeroUm > numeroDois
// const booleano2 = numeroUm == numeroDois
// console.log ( soma, booleano, booleano2)




//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// let primeiroNumero =Number(prompt( "Digite um numero"))
// let parOUNÃO = primeiroNumero % 2

// console.log( parOUNÃO)

// Se você obter o número 0, o número é par . 
// Se você obter o número 1 ,o número é impar .


// d) Faça uma função que recebe uma mensagem (string) como parâmetro
//  e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// let primeiraVariavel =(prompt( "Digite algo"))
// tamanho = primeiraVariavel.length
// maiuscula = primeiraVariavel.toUpperCase()

// console.log(tamanho,maiuscula)





//                                            Exercício 3



// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
//  Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores
//   inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:



//  let primeiroNumero =Number(prompt( "Digite um numero"))
//  let segundoNumero =Number(prompt( "Digite outro numero"))

//  let soma = primeiroNumero + segundoNumero
//  let subtração = primeiroNumero - segundoNumero
//  let multiplicação = primeiroNumero * segundoNumero
//  let divisão = primeiroNumero / segundoNumero
 
//  console.log( soma,subtração, multiplicação,divisão)



