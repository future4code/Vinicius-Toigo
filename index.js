//Exercícios de interpretação de código



//Exercício 1


// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


// a) Explique o que o código faz. Qual o teste que ele realiza? 

// O código testa números, se o número for par, passará no teste, se for ímpar, não passará.


// b) Para que tipos de números ele imprime no console "Passou no teste"? 

// Números pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"?

//Números ímpares.



//Exercício 2


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//      // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?

//Para automatizar uma tarefa dentro de um supermercado.


// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// 2,25.

// c) Considere que um usuário queira comprar uma `Pêra`,
//qual seria a mensagem impressa no console se retirássemos
//o `break` que está logo acima do `default` 
//(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// O preço da fruta Pêra é R$ 5




//Exercício 3 


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
   
// }

// console.log(mensagem)


// a) O que a primeira linha está fazendo?

//Pedindo ao usuário que digite um número qualquer.

// b) Considere um usuário digitou o número 10. 
//Qual será a mensagem do terminal? E se fosse o número -10?

// Com o número 10, aparece 'Esse número passou no teste' e com o 
// número -10 Acontece um erro 'mensagem is not defined'.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

//   Sim, o erro acontece pois o console.log não consegue acessar 
//   as informações que estão acima da chave.


//Exercícios de escrita de código



//Exercício 1

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
//  Se sim, imprima no console
//  `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


// const idadeDirigir = Number(prompt("Digite a sua idade"))

//  if(idadeDirigir >= 18) {
//      console.log("Você pode dirigir")
//  } else {
//      console.log("Você não pode dirigir")
// }



//Exercício 2 

// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem
//  "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turnoDia = prompt("Digite M (Matutino), V (Vespertino) ou N (Noturno) para podermos saber em que turno do dia você estuda ")



// if (turnoDia = M) {
//     console.log('Bom dia!')
// }
// else if (turnoDia = V) {
//     console.log('Boa Tarde!')
// }
    
// if (turnoDia = N) {
//     console.log('Boa noite!')

// }



//Exercício 3

//  const turnoDia = prompt("Digite M(Matutino), V(Vespertino) ou N(Noturno) para podermos saber em que turno do dia você estuda ")


// switch (turnoDia) {
//        case "M":
//           console.log("Bom dia!")
//          break
//         case "V":
//           console.log("Boa tarde!")
//            break
//         case "N":
//            console.log("Boa noite!")
//            break
//            default:
//           console.log("Seu turno não foi encontrado. Escolha 'Matutino', 'Vespertino' ou 'Noturno' ")   
// }



//Exercício 4

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme 
// com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que 
// pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
//  então verifique se seu amigo ou amiga vai topar assistir o filme.
//  Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const generoFilme = prompt("Digite o gênero do filme que você quer assistir ")
// const preçoIngresso = prompt =Number("Digite o preço do ingresso")

// if(generofilme = fantasia && preçoIngresso < 15) {
// console.log('Bom filme!')

// }





