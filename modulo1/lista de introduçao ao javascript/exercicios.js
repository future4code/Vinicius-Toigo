// // Exemplos


// Exercício 0A
// function soma() {
//   // escreva seu código aqui
//   const num1 = prompt('Digite o primeiro número')
//   const num2 = prompt('Digite o segundo número')

//   console.log(Number(num1) + Number(num2))
// }

// // Exercício 0B
// function imprimeMensagem() {
//   // escreva seu código aqui
//   const mensagem = prompt('Digite sua mensagem')

//   console.log(mensagem)
// }

// // ---------------------------------------------------



// // Exercícios

// // Exercício 1

//   // escreva seu código aqui

// function calculaAreaRetangulo() {

//   const num1 = prompt('Digite o primeiro número da altura de um retangulo')
//   const num2 = prompt('Digite o segundo número da largura de um retangulo')
  
//   const result = num1 * num2
  
//   console.log (result)

// }



// // Exercício 2



//   // escreva seu código aqui

// function imprimeIdade() {
//   const anoAtual = prompt('Digite o ano em que estamos')
//   const anoDenascimento = prompt('Digite seu ano de nascimento')

// const resultado = anoAtual - anoDenascimento

// console.log(resultado)


// }



// // Exercício 3


//   // escreva seu código aqui

// function calculaIMC() {

//     const peso = prompt('Digite o seu peso em kilogramas')
//     const altura =prompt('Digite sua altura em metros')

//     console.log (peso / ( altura * altura ) )
// }







// // Exercício 4

//   // escreva seu código aqui

// function imprimeInformacoesUsuario() {
//     const nome = prompt('Digite o seu nome')
//     const idade = prompt('Digite a sua idade')
//     const email = prompt('Digite o seu e-mail')

//     console.log("Meu nome é", nome, "tenho", idade, "anos, e o meu email é", email)
// }




// // Exercício 5


//   // escreva seu código aqui


// function imprimeTresCoresFavoritas() {

//     const cor1 = prompt('Digite a sua cor favorita')
//     const cor2 = prompt('Digite a sua segunda cor favorita')
//     const cor3 = prompt('Digite a sua terceira cor favorita')

//     console.log([cor1] , [cor2] , [cor3])

// }




// // Exercício 6

//   // escreva seu código aqui

// function retornaStringEmMaiuscula() {
//     const aleatorio  = prompt('Digite algo aleatoriamente')
//    aleatorio.toUpperCase()

// console.log( aleatorio.toUpperCase())

//  }




// // Exercício 7


//   // escreva seu código aqui

//  function calculaIngressosEspetaculo() {

//     const espetaculo = prompt('Digite o custo de um espetáculo de teatro')
//     const valorDoingresso = prompt('Agora digite o valor de cada ingresso')

//     const valor = espetaculo / valorDoingresso

// console.log(valor)
//  }





// // Exercício 8


//   // escreva seu código aqui

//  function checaStringsMesmoTamanho() {
//     const aleatorio = prompt('Digite algo aleatorio')
//     const aleatorio2 = prompt('Digite algo aleatorio novamente')

// const verificacao = aleatorio.length
// const verification = aleatorio2.length
//  const verificacaoReal = aleatorio === aleatorio2

// console.log(verificacaoReal)

//  }







// // Exercício 9
//   // escreva seu código aqui


//  function checaIgualdadeDesconsiderandoCase() {

//     const meuAmigodiz = 'Ola'
//     const vcDiz = 'Ola'

//     const minusCular = meuAmigodiz.toLowerCase()
//     const maisCular = vcDiz.toUpperCase()

//           if (meuAmigodiz === vcDiz) {
//             console.log('true')
//          } else {
//             meuAmigodiz != vcDiz
//             console.log('false')
//          }

   
// // Exercício 10

//   // escreva seu código aqui

//  function checaRenovacaoRG() {

//     let anoAtual = prompt('Digite o ano atual') 
//     let anoDenascimento = prompt('Digite o seu ano de nascimento') 
//     let identidadeEmitida = prompt('Digite o ano em que sua carteira de identidade foi emitida') 


//           if (anoAtual - anoDenascimento <= 20  ) {
//             console.log('true')
//          } else { 
//             identidadeEmitida - anoDenascimento === 10
//             console.log('false')
//          }



//  }




// // Exercício 11

//   // escreva seu código aqui

//  function checaAnoBissexto() {

//     let anoQualquer = prompt('Digite um ano qualquer')
    
//           if (anoQualquer % 4 == 0 && (anoQualquer % 100 != 0) || (anoQualquer % 400 == 0) ) {
//              console.log('true')
//           } else { 
           
           
//         }
//     }


        // - **São bissextos** todos os anos múltiplos de 400**.**
        // - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
        // - **Não são bissextos** todos os demais anos.





// // Exercício 12

//  escreva seu código aqui


//  function checaValidadeInscricaoLabenu() {

//    const maiorIdade = prompt('Você tem mais de 18 anos? Responda com Sim ou Não')
//    const ensinoMedio = prompt('Você possui o ensino médio completo? Responda com Sim ou Não')
//    const disponiBilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Responda com Sim ou Não')

 
//  console.log(maiorIdade, ensinoMedio,disponiBilidade)


//  }