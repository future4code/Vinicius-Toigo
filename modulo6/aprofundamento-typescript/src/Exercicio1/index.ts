// - **Exercício 1**
    
//     O Typescript é uma linguagem um pouco mais criteriosa
//     que o Javascript, então vamos conhecer um pouco desses critérios.
    
//     a) Crie uma variável **minhaString** do tipo `string` 
//     e atribua um valor a ela. Tente atribuir um número a 
//     esta variável. O que acontece?
    


    // Resposta
    const minhaString : string = "string"   

    // Acontece um erro, pois type string não pode ser um número.



//     b) Crie uma variável **meuNumero** do tipo `number` e 
//     atribua um valor numérico. Como fazer para que essa variável
//      também aceite strings? Ou seja, como criamos no typescript 
//      uma variável que aceite mais de um tipo de valor?
    

    //Resposta
    const meuNumero : number | string = 1 

    // Utilizando o pipe (|).
    



//     c) Agora crie um novo objeto. Este objeto é uma pessoa, e 
//     deve possuir três propriedades:
    
//     `nome`, que é uma string;
    
//     `idade`, que é um número;
    
//     `corFavorita`, que é uma string.
    
    type Pessoa  = {
        name:string,
        idade: string 
        corFavorita:string,
    }

//     Crie mais três objetos, que também precisam ter apenas os 
//     campos definidos acima. Crie um **tipo** `Pessoa` para
//      garantir que todos os objetos tenham os mesmos campos.
//     d) Modifique a propriedade `corFavorita` para que apenas
//      seja possível escolher entre as cores do arco-íris. Utilize
//       um `enum` para isso.


enum ArcoIris{
	VERMELHO="Vermelho",
	AZUL="Azul",
	VERDE="Verde",
	AMARELO="Amarelo",
	LARANJA="Laranja",
	ANIL="Anil",
	VIOLETA="Violeta"
}


    const pessoa1: Pessoa={
        name:"Pedro",
        idade: "20",
        corFavorita:ArcoIris.AZUL

    }

    const pessoa2: Pessoa={
        name:"Ezequiel",
        idade: "20",
        corFavorita:ArcoIris.VERMELHO

    }
    const pessoa3: Pessoa={
        name:"Vinícius",
        idade: "20",
        corFavorita:ArcoIris.VERDE

    }


