// // // EXERCÍCIO 01

// function inverteArray(array) {
	
// 	const arrayInvertido = array.map((item, index, array) => 
// 	array [array.length - index - 1]);
// 	return( arrayInvertido)

// }






// // EXERCÍCIO 02

// function retornaNumerosParesElevadosADois(array) {

// 	const numerosParesElevados = array.filter

// 	(item => item % 2 == 0).map(item => item * item)

// 	return numerosParesElevados
// }


 



// }

// // EXERCÍCIO 03

// function retornaNumerosPares(array) {

//   const arrayPares = array.filter
//   (array => array % 2 === 0) 

//     return(arrayPares)
//   }



// // EXERCÍCIO 04

//   function retornaMaiorNumero(array) {

// 	let maiorNumero = 0;

// 	for (let i = 0; i < array.length; i++) {

// 	   if ( array[i] > maiorNumero ) {
// 		  maiorNumero = array[i];
// 	   }
// 	}
// return(maiorNumero)
//   }

 

// // EXERCÍCIO 05



// function retornaQuantidadeElementos(array) {
  
// 	let quantidadeElementos = array.length
// 	return (quantidadeElementos)

// }


// // EXERCÍCIO 06

// function retornaExpressoesBooleanas() {

// 	const booleano1 = true
// 	const booleano2 = false
// 	const booleano3 = !booleano2 
// 	const booleano4 = !booleano3 

// 	const retornaBooleano = [booleano1 && booleano2 && !booleano4, 

// 	 (booleano1 && booleano2) || !booleano3, 
	
// 	  (booleano2 || booleano3) && (booleano4 || booleano1),
	
// 	 !(booleano2 && booleano3) || !(booleano1 && booleano3) ,
	
// 	 !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]
    
//     return(retornaBooleano)
		
// }



// // EXERCÍCIO 07

// function retornaNNumerosPares(n) {


// 	const retornaNumerospares = []

// 	let par = 0
// 	let i = 0
	
// 	while(i < n){
// 	   i++
// 	   retornaNumerospares.push(par)
// 	   par += 2
// 	}
// 	return (retornaNumerospares)
// }



// // EXERCÍCIO 08

// function checaTriangulo(a, b, c) {

// 	if((a === b) && (b === c) && (c === a)){  

//         return "Equilátero"
//     } else if((a !== b) != (b !== c) !== (c !== a)){

//         return "Escaleno"

//     } else { 
//         return "Isósceles"
//     }
// }
	
 


// // EXERCÍCIO 09

// function comparaDoisNumeros(num1, num2) {
// //   Formato do objeto a ser retornado:
// //   {
// //     maiorNumero: X,
// //     maiorDivisivelPorMenor: Y,
// //     diferenca: Z
// //   }

// const comparaDoisNumeros = {
//     maiorNumero: 0,
//     maiorDivisivelPorMenor:0 ,
//     diferenca: 0
//   }
//   let maiorNumero
//   let menorNumero

//   if (num1 >= num2) {
//     maiorNumero = num1
//     menorNumero = num2

//   } else if (num2 > num1) {
//     maiorNumero = num2
//     menorNumero = num1
//   }

//   comparaDoisNumeros.maiorNumero = maiorNumero
//   comparaDoisNumeros.maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
//   comparaDoisNumeros.diferenca = maiorNumero - menorNumero

//   return(comparaDoisNumeros)

// }


// // EXERCÍCIO 10

//  function segundoMaiorEMenor(array) {
 
//     let primeiroMaior = -Infinity
//     let primeiroMenor = Infinity

//     let segundoMaior = -Infinity
//     let segundoMenor = Infinity

//     array.filter(item => {
//         if (item >= primeiroMaior){
//           segundoMaior = primeiroMaior
//           primeiroMaior = item
//         } else if (item < primeiroMaior && item > segundoMaior) {
//           segundoMaior = item
//         }
//         return(segundoMaior)
//       })
    
//       array.filter(item => {
//         if (item <= primeiroMenor){
//           segundoMenor = primeiroMenor
//           primeiroMenor = item
//         } else if (item > primeiroMenor && item < segundoMenor) {
//           segundoMenor = item
//         }
//         return(segundoMenor)
//       })
    
//       const arrayNovo = [segundoMaior, segundoMenor]
//       return(arrayNovo)
//       }
    





// EXERCÍCIO 11


// function ordenaArray(array) {

//     return array.sort(function(num1,num2){
//         return num1 - num2
//     })
// }
    


// // EXERCÍCIO 12

// function filmeFavorito() {

    // let filme = {

    //     nome: "O Diabo Veste Prada",
    //     ano: 2006,
    //     diretor: "David Frankel",
    //     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],

    //   }
    //   return(filme)
    



// // EXERCÍCIO 13

// function imprimeChamada() {

//     filme = {
//         nome: 'O Diabo Veste Prada',
//         ano: 2006,
//         diretor: 'David Frankel',
//         atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//      }
//     frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
//      return frase
// }






// // EXERCÍCIO 14

// function criaRetangulo(lado1, lado2) {

// const retangulos = {

// largura: lado1,
// altura: lado2,

// perimetro: 2 * (lado1+lado2),
// area: lado1*lado2
// }

// return(retangulos)

// }




// // EXERCÍCIO 15

// function anonimizaPessoa(pessoa) {

//     const pessoaAnonima = {
//         nome: "Astrodev",
//         idade: 25,
//         email: "astrodev@labenu.com.br",
//         endereco: "Rua do Futuro, 4"
//     }

//     pessoa.nome = "ANÔNIMO"
// return (pessoa)

// }



// // EXERCÍCIO 16A


// function maioresDe18(arrayDePessoas) {
//     [
//         { nome: "Pedro", idade: 20 },
//         { nome: "João", idade: 10 },
//         { nome: "Paula", idade: 12 },
//         { nome: "Artur", idade: 89 } 
//     ]
    
//     const novoArray = arrayDePessoas.filter 
//     (item => item.idade>=18)
//     return(novoArray)



// }



// // EXERCÍCIO 16B

//  function menoresDe18(arrayDePessoas) {

// const novoArray = arrayDePessoas.filter
// (item=> item.idade <18)
// return(novoArray)




//  }



// // EXERCÍCIO 17A
//  function multiplicaArrayPor2(array) {

   
    
//     const novoArray = array.map 
//     (item=> item*2)
//     return(novoArray)


//  }



// // EXERCÍCIO 17B

// function multiplicaArrayPor2S(array) {

//     const multiplicaArrayString = array.map
//     (item=>item*2).map
//     (item=>item.toString())

//     return multiplicaArrayString



// }




// // EXERCÍCIO 17C

// function verificaParidade(array) {

// const verificaPar = array.map(number =>{
// if(number % 2===0)
// return(`${number} é par`)
//  else {
// return(`${number} é ímpar`)
// }
// })
// return(verificaPar)

// }


// // EXERCÍCIO 18A
// function retornaPessoasAutorizadas(pessoas) {

// }

// // EXERCÍCIO 18B
// function retornaPessoasNaoAutorizadas(pessoas) {

// }

// // EXERCÍCIO 19A
// function ordenaPorNome(consultasNome) {

// }

// // EXERCÍCIO 19B
// function ordenaPorData(consultasData) {

// }

// // EXERCÍCIO 20
// function calculaSaldo(contas) {

// }
