- Exercício 1
    
    Considere que a gente só possa fazer três operações com `string`: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma `string` é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma `string` é  'one edit' de outra.

-  Exemplos

    `"banan"` é 'one edit' de `"banana"` (remoção de um caracter)

    `"bananak"` é 'one edit' de `"banana"` (adição de um caracter)

    `"panana"` é 'one edit' de `"banana"` (troca de um caracter)

    `"bananaaa"` **não** é 'one edit' de `"banana"` (adição de dois caracteres)

```tsx
   function isOneEdit(stringA:string, stringB:string): boolean{
    // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
    if(Math.abs(stringB.length - stringA.length)>1)
    return false
    // Se uma é maior que a outra, a maior obrigatoriamente deve    incluir a outra
    if(stringA.length > stringB.length)
    return stringA.includes(stringB)

    if(stringB.length > stringA.length)
    return stringB.includes(stringA)

    //Passando pelos ifs, significa que as duas têm o mesmo tamanho e nesse caso, varremos as strings contando quantas letras diferentes tem
    let charsDiffCount = 0 
    for(let i=0; i< stringA.length; i++){
        if(stringA[i] !== stringB[i]) charsDiffCount++
    }

    //Retorna true se a diferença é 1, false ao contrário
    return charsDiffCount === 1
}
 ```

- Exercício 2
    
    Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial

- Exemplos
    
    Para o input `aabbb` o resultado deve ser `a2b3`
    
    Para o input `aabcccccaaa` o resultado deve ser `a2b1c5a3`
    
    Para o input `accurate` o resultado deve ser `accurate` (já que inicialmente o código retornaria `a1c2u1r1a1t1e1` que possui o tamanho maior do que `accurate`)
    
    Para o input `escola` o resultado deve ser `escola` (já que inicialmente o código retornaria `e1s1c1o1l1a1` que possui o tamanho maior do que `escola`)
    
    Para o input `accuraaaaaaaaaate`, o resultado deve ser `a1c2u1r1a10t1e1`
    
```tsx
    export const stringCompression = (input) => {
  const substrings = [];
  let lastChar = input[0];
  let charCount = 0;

  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    charCount++;
  }

  substrings.push(lastChar + charCount);
  let result = "";
  for (const key of substrings) {
    result += key;
  }

  return result.length > input.length ? input : result;
};
```