//Exercícios de interpretação de código

//Exercício 1 

//O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)


// Está checando números dentro de um array, 10.


//Exercício 2


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) O que vai ser impresso no console?  19, 21, 23, 25, 27 e 30. Os números maiores que 18.

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
//   o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso?

//Sim.



//Exercício 3

//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }


//*
//** 
//*** 
//**** 



//Exercícios de escrita de código



// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
//     - 💡 Dica
        
//         Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a
// mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
        
    
//     c) Por fim, imprima o array com os nomes dos bichinhos no console




// const pets=[]

// const quantidadePets=Number(prompt("Quantos bichinhos de estimação você tem?"))

// if(quantidadePets === 0) 

// console.log ("Que pena! Você pode adotar um pet!")

// else{for (i=0; i<quantidadePets; i++) {

// 	const nomeDospets=prompt("Digite os nomes dos seus "+(i+1)+"º pets")
    
// 	pets.push(nomeDospets)
// }

// }

// console.log(pets)

 




    
// // 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') 
// que é composto somente de números. Baseando-se nisso, crie uma função para cada
//  um dos itens abaixo, realizando as operações pedidas:
    
// //     a) Escreva um programa que **imprime** cada um dos valores do array original.




// let array =[1,2,3,4,5]
// console.log(array)


// //     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    

// let array =[1,2,3,4,5,]

// let resultado1 = 10 / [1]
// let resultado2 = 10 / [2]
// let resultado3 = 10 / [3]
// let resultado4 =  10 / [4]
// let resultado5 =  10 / [5]

//  console.log(resultado1,resultado2,resultado3,resultado4,resultado5 )



// //     c) Escreva um programa que **crie** um novo array contendo, somente, os números
//  pares do array original e **imprima** esse novo array
    

// let array =[1,2,3,4,5,]

// let novoArray = []

// for (let i = 0; i < array.length; i++) {

//     if(array[i]%2==0)	

//         novoArray[i]=array[i]
// }

// console.log(novoArray) 





// //     d) Escreva um programa que **crie** um novo array contendo strings, 
// da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
// arrayOriginal = [1,2,3,4,5]

// let criaNovoArrayString = (arrayOriginal) => {

// 	let arrayString = [];
    
// 	for (let i = 0; i < arrayOriginal.length; i++) {

// 		arrayString[i] = arrayOriginal[i];

// 		console.log("O elemento do índex "+ i +" é: "+ arrayString[i])
// 	}
// }
// criaNovoArrayString (arrayOriginal)




// //     e) Escreva um programa que imprima no console o maior 
// e o menor números contidos no array original
    

//  arrayOriginal = (1,2,3,4,5)


//  console.log('1' , '5' )




