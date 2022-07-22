Determine a complexidade dos seguintes algoritmos

- Exercício 1

```tsx
const findFirstRecurringCharacter = (input) => {
  const charHashMap = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
}; 
```

Resposta => Sendo n o tamanho da string input, complexidade é O(n)

- Exercício 2

```tsx 
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
```
 Resposta => Sendo n o tamanho da string comparison, complexidade é
 O(n)

 - Exercício 3

```tsx
 export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```
Resposta => O(1)

 - Exercício 4

```tsx
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```

Resposta => Sendo n o tamanho do array `listOfNumbers`, a complexidade é

O(n²)

Essa questão é uma "pegadinha". Serve para mostrar que algumas funções fazem iterações, mesmo que um loop não esteja explícito. Nesse caso, por mais que não saibamos o que a função `indexOf` faz, dá para imaginar que ela percorre a o array tentando achar um index. Dessa forma, há um loop dentro do outro, caracterizando uma complexidade quadrática.
Em uma entrevista, você poderia dizer "estou assumindo que essa função `indexOf` possui uma complexidade O(n)", e mesmo que por algum detalhe isso esteja errado, não tem problema. O importante é que faça sentido com o que a função faz. Se é uma função que encontra o index, podemos assumir que ela vai precisar olhar pra cada elemento do array, o que gera a complexidade O(n). Como está dentro de um loop, multiplicamos pelo loop externo, dando o O(n^2).

- Exercício 5

Coloque, em ordem de eficiência, os 4 algoritmos que você teve que calcular a complexidade

Resposta => Da maior eficiência/performance para a menor

3 → 1 = 2 → 4