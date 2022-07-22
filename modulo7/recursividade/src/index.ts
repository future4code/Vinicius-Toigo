// - Exercício 1
    
//     Escreva uma função recursiva que:
    
//     a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
    
    const imprimeNumeros =(n:number)=>{
        if(n >=0){
            imprimeNumeros(n-1)
            console.log(n);
        }
    };

//     b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const imprimeNumeros2 = (n: number) => {
    if (n >= 0) {
      console.log(n);
      imprimeNumeros2(n - 1);
    }
  };

//   - Exercício 2
    
    // Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n

    export const calculateSumTo = (n: number, acc: number = 0): number => {
        if (n === 0) {
          return acc;
        }
        return calculateSumTo(n - 1, acc + n);
      };
      
      
      // Exemplos de uso:
      console.log(calculateSumTo(3));
      console.log(calculateSumTo(10));
      console.log(calculateSumTo(100));

    //   - Exercício 3
    
    // Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).

    export const calculateSumTo2 = (n: number): number => {
        var sum = 0
          for (var i = 0 ; i <= n ; i++) {
              sum += i;
        }
          return sum;
      };
          
      // Exemplos de uso:
      console.log(calculateSumTo(3));
      console.log(calculateSumTo(10));
      console.log(calculateSumTo(100));

    //   - Exercício 4
    
    // Escreva uma função recursiva que consiga imprimir todos os elementos de um array

    export const printArray = (arr: number[], i: number = arr.length - 1) => {
        if (i >= 0) {
          printArray(arr, i - 1);
          console.log(`Elemento ${i}: `, arr[i]);
        }
      };
      
      // Exemplo de uso:
      const array = [1, 2, 3, 4];
      printArray(array);