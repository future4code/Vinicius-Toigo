function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
 if(arrayDeNumeros.includes(numeroEscolhido)){
    return `O número ${numeroEscolhido} aparece ${arrayDeNumeros.filter((elemento) => {
    return elemento === numeroEscolhido
    }).length}x`
  } else {
    return `Número não encontrado`
  }
}
  
