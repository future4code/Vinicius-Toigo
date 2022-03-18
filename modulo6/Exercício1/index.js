// - **Exercício 1**
    
//a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?


// Utilizando o comando process.argv[2] que é o 2 parâmetro
// passado como argumento, 0 é o próprio node e 1 é
// o arquivo a ser executado




//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores,
//  imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome} Você tem ${idade} anos`)





// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

// const nome = process.argv[2]
// const idade = process.argv[3]

// const novaIdade = idade+7

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)
