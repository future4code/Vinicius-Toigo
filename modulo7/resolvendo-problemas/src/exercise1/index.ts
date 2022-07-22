console.log("Salve família Joy!!")

// Ideia de solução
// ------------------------------------------------------------------------------------------
// Função que recebe uma string e devolve um booleano indicando se é palíndromo ou não
// Criar uma string que é igual à string recebida ao contrário
//  -> Transformar string em array (usando o .split()) 
//  -> Inverto o array (usando o .reverse())
//  -> Transformo em string novamente
// Compara ambas as strings e retorna o resultado da comparação


// Força Bruta
// ----------------------------------------------------------------------------------------
// O código da função que verifica se é palíndromo:

// funcao limparTexto(texto: string): string {
//   Jogar todas as letras de texto para minúsculas
//   Apagar os espaços
//   Ignorar acentos e caracteres especiais
// }

// funcao verificaPalindromo(texto: string): boolean { // "ailimafalouolafamilia"
//   vat textoLimpo = limparTexto(texto)
//   var textoInvertido = texto.split("").reverse().join() // [b, o, b]
//   return texto === textoInvertido // "bob" = "bob"
// }


// Solução final

function formatText(text: string): string {
  const formatedText = text.toLowerCase()
    .replace(/[óöõô]/gi, "o")
    .replace(/[éèê]/gi,"e")
    .replace(/[íìïî]/gi,"i")
    .replace(/[" "]/gi, "")
    .replace(/[\,]/gi, "")


  return formatedText
}

function checkPalyndrome(text: string): boolean {
  const formatedText = formatText(text)
  const reversedText = formatedText.split("").reverse().join("")

  return formatedText === reversedText
}

console.log(checkPalyndrome("ana")) //expected true
console.log(checkPalyndrome("chapéu")) //expected false
console.log(checkPalyndrome("subi no ônibus")) //expected true
console.log(checkPalyndrome("ôóôéeóôô"))//expected true
console.log(checkPalyndrome("A dama admirou o rim da amada"))
