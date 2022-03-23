
// - Exercício 1
    
// A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três 
// lados do triângulo: `ladoA, ladoB, ladoC` e retorna se ele é equilátero, isósceles 
// ou escaleno. Refatore a função para o Typescript.



function checaTriangulo(a:number, b:number, c:number) :string {
	if (a !== b && b !== c) {
	  return "Escaleno";
	} else if (a === b && b === c) {
	  return "Equilátero";
	} else {
	  return "Isósceles";
	}
      }



      // - Exercício 2
    
    //  A seguinte função em JavaScript pergunta ao usuário suas três
    //  cores favoritas e imprime no console um array que
    //  contenha essas três cores. Refatore a função para o Typescript.

function imprimeTresCoresFavoritas() {

    const cor1 :string = prompt("Insira sua primeira cor favorita")
    const cor2 :string= prompt("Insira sua segunda cor favorita")
    const cor3 :string = prompt("Insira sua terceira cor favorita")

    console.log([cor1, cor2, cor3])
 }




// - Exercício 3
    
//     A função recebe um ano e retorna um booleano (true ou false) 
//     que indica se o ano é bissexto. Um ano é bissexto de acordo com as 
//     seguintes condições:
    
//     - **São bissextos** todos os anos múltiplos de 400**.**
//     - **São bissextos** todos os múltiplos de 4, exceto se for 
//     múltiplo de 100 mas não de 400**.**
//     - **Não são bissextos** todos os demais anos.
    
//     Com isso em mente, refatore a função para o Typescript.

// **Código em JavaScript:** 


// function checaAnoBissexto(ano) {
//    const cond1 = ano % 400 === 0
//    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//    return cond1 || cond2
// }


function checaAnoBissexto (ano:number):boolean {
   const cond1 :boolean= ano % 400 === 0
   const cond2 :boolean= (ano % 4 === 0) && (ano % 100 !== 0)
   return cond1 || cond2
}



// - Exercício 4
    
//     A seguinte função recebe dois números como parâmetro e retorna a 
//     diferença entre o maior número e o menor.
//      Dessa forma, refatore a função para o Typescript

// **Código em JavaScript:** 

// function comparaDoisNumeros(num1, num2) {
//   let maiorNumero;
//   let menorNumero;

//   if (num1 > num2) {
//     maiorNumero = num1;
//     menorNumero = num2;
//   } else {
//     maiorNumero = num2;
//     menorNumero = num1;
//   }

//   const diferenca = maiorNumero - menorNumero;

//   return diferenca 
// }


function comparaDoisNumeros(num1:number, num2 :number) {
    let maiorNumero:number
    let menorNumero:number
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }
  


  

  // - Exercício 5
    
//     A função abaixo pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
    
//     - Para pessoas com menos de 20 anos, ou exatamente 20 anos, 
//     deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//     - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 
//     10 anos (se for exatamente 10 anos, deve ser renovada).
//     - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
    
//     Dito isso, refatore a função para o Typescript.
    
//     **Código em JavaScript:**

    // function checaRenovacaoRG() {
    //     const anoAtual = Number(prompt("Digite o ano atual"))
    //     const anoNascimento = Number(prompt("Digite o ano de nascimento"))
    //     const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))
     
    //     let idade = anoAtual - anoNascimento
    //     let tempoCarteira = anoAtual - anoEmissao
     
    //       if(idade <= 20 ) {
    //        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
         
    //     }else if(idade >= 20 || idade <= 50) {
    //        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
         
    //     }else if(idade > 50) {
    //        return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
         
    //      }else {
    //          return "error"
    //      }
        
    //  }
     
    function checaRenovacaoRG():boolean {
        const anoAtual:number = Number(prompt("Digite o ano atual"))
        const anoNascimento:number = Number(prompt("Digite o ano de nascimento"))
        const anoEmissao:number = Number(prompt("Digite o ano de emissão do documento"))
     
        let idade:number = anoAtual - anoNascimento
        let tempoCarteira:number = anoAtual - anoEmissao
     
        const cond1:boolean = idade <= 20 && tempoCarteira >= 5
        const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
        const cond3:boolean = idade > 50 && tempoCarteira >= 15
    
        return (cond1 || cond2 || cond3)
        
     }
     
