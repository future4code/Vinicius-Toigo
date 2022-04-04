// - Exercício 7
    
//     Você acabou de conseguir um emprego em uma importadora e precisa continuar 
//     a desenvolver o sistema de organização de estoque da empresa. A pessoa 
//     desenvolvedora anterior a você chegou a criar uma função que ajusta os 
//     preços para o formato brasileiro, mas não chegou a implementa-la:
    
   
const ajustaPreco = (preco :number): string => {
    const valorAjustado: string = preco.toFixed(2).replace('.', ',')
    return "R$ "+valorAjustado
}

// O seguinte `array` traz o estoque atual da empresa:

[
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

// Aproveitando a função já feita, faça uma nova função que receba o `array`de 
// estoque como parâmetro, use a função `ajustaPreco` para corrigir os preços e 
// retorne a lista de estoque ordenada pela quantidade de cada produto.

type Produtos = {

nome:string,
quantidade:number,
valorUnitario:number | string

}


const listaProdutos: Produtos[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]


const funcaoListaOrdenada = (lista: Produtos[]) : Produtos[] => {
lista.forEach(
(item)=>(item.valorUnitario = ajustaPreco(item.valorUnitario as number))
);
const listaOrdenada: Produtos[] = lista.sort((a,b)=> a.quantidade - b.quantidade
);
return listaOrdenada


}
console.log(funcaoListaOrdenada(listaProdutos));


// - Exercício 8

//     Escreva uma função que pergunta ao usuário a data de nascimento de uma 
//     pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade 
//     (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a 
//     carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo 
//     os seguintes critérios:

//     - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada 
//     de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//     - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 
//     em 10 anos (se for exatamente 10 anos, deve ser renovada).
//     - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

const funcao8 = (
dataNascimento: string,
dataDocumento: string
): boolean | string => {
const dataAtualTimestamp: number = new Date().getTime();
const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
const anoNascTimestamp: number = new Date(
`${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
).getTime();
const dataDocTimestamp: number = new Date(
`${anoDoc}-${mesDoc}-${diaDoc}T00:00:00`
).getTime();
const idade: number = dataAtualTimestamp - anoNascTimestamp;
const ultimaRenovacao: number = dataAtualTimestamp - dataDocTimestamp;
const umAnoEmTimestamp: number = 31556926000;

if (idade <= 20 * umAnoEmTimestamp) {
return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
} else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
} else if (idade >= 50 * umAnoEmTimestamp) {
return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
} else {
return "algo deu errado";
}
};
console.log(funcao8("25/07/2000", "13/11/2020"));


// - Exercício 9

//     Uma operação matemática bastante utilizada em probabilidade e 
//     estatística é o **fatorial**, representado por um **!** (ponto de exclamação). 
//     Ele consiste em realizar a multiplicação de todos os números (a partir de 1) 
//     até aquele colocado na operação. Veja os exemplos abaixo:

//     - `3! = 3*2*1 = 6`
//     - `4! = 4*3*2*1 = 24`
//     - `5! = 5*4*3*2*1 = 120`
//     - `6! = 6*5*4*3*2*1 = 720`

//     Isso vale para todos os números inteiros não negativos (também chamados de 
//     "números naturais"). Dois valores para se tomar cuidado 
//     são:  `1! = 1` e `0! = 1` (uma exceção da regra!).

//     Uma aplicação interessante do fatorial é o cálculo de anagramas de uma palavra. 
//     Anagrama é uma outra palavra (não precisa existir em português) com as mesmas 
//     letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra 
//     `mesa` são: `ames`, `maes`, `meas`, `emsa`, `smea` e muitos outros.

//     A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o 
//     fatorial da quantidade de letras. Para `mesa`, a quantidade é `4! = 24`

//     Considerando tudo o que foi mencionado, escreva uma função que receba 
//     uma `palavra` (sem letras repetidas) e devolva a quantidade de anagramas 
//     que ela possui.

const funcao9 = (palavra: string): number => {
const quantidadeLetras = palavra.length;

if (quantidadeLetras === 0) {
return 1;
}

let resultado = 1;

for (let i = quantidadeLetras; i > 0; i--) {
resultado *= i;
}

return resultado;
};
console.log(funcao9("index"))

// - Exercício 10
//     - **Definição do problema**
    
//         O CPF consiste de 11 dígitos cuja configuração respeita o formato XXX.XXX.XXX-XX. Para a construção de um número de CPF as seguintes regras são aplicadas.
    
//         - Os oito primeiros dígitos são os número-base
//         - O nono dígito é a região fiscal
//         - O penúltimo dígito é o dígito verificador (DV) módulo 11 dos nove dígitos anteriores
//         - O último dígito é o DV módulo 11 dos dez dígitos anteriores
    
//         Para o cálculo dos DV existem pesos associados a cada dígito, abaixo segue exemplo do cálculo dos DV do CPF com número-base 145382206.
    
//         - Exemplo de cálculo do primeiro Dígito Verificador
        
//             Começamos utilizando os 9 primeiros dígitos multiplicando-os pela sequência decrescente de 10 à 2 e somamos esse resultado.
        
//             ```
//             1  4  5  3  8  2  2  0  6
//             x  x  x  x  x  x  x  x  x
//             10 9  8  7  6  5  4  3  2
//             =  =  =  =  =  =  =  =  =
//             10 36 40 21 48 10 8  0  12
        
//             10 + 36 + 40 + 21 + 48 + 10 + 8 + 0 + 12 = 185
//             ```
        
//             Com esse resultado agora basta realizar a operação de módulo 11. Ou seja:
        
//             ```
//             185 % 11 = 9
//             ```
        
//             O resto da divisão é `9`. Agora para calcular o dígito verificador vamos subtrair este resto do número 11:
        
//             ```
//             11 - 9 = 2
//             ```
        
//             ATENÇÃO: Como o resultado da subtração foi 2, o primeiro dígito 
//             verificador é igual a 2. Caso o resultado dessa subtração for `10` ou 
//             maior, o penúltimo dígito verificador será o `0`.
        
//         - Exemplo de cálculo do segundo Dígito Verificador
        
//             A validação do segundo dígito é semelhante a primeira, porém vamos 
//             considerar o primeiro dígito verificador calculado anteriormente. Por 
//             isso a multiplicação é feita de 11 à 2.
        
//             ```
//             1  4  5  3  8  2  2  0  6  2
//             x  x  x  x  x  x  x  x  x  x
//             11 10 9  8  7  6  5  4  3  2
//             =  =  =  =  =  =  =  =  =  =
//             11 40 45 24 56 12 10 0  18 4
        
//             11 + 40 + 45 + 24 + 56 + 12 + 10 + 0 + 18 + 4 = 220
//             ```
        
//             Novamente vamos efetuar a divisão por 11 usando o módulo:
        
//             ```
//             220 % 11 = 0
//             ```
        
//             E vamos fazer a subtração:
        
//             ```
//             11 - 0 = 11
//             ```
        
    //     Como o valor é igual ou maior que `10`, o último dígito é `0`.
        
    //     Assim, confirmamos os dois dígitos verificadores do nosso CPF 
    //     145.382.206-**20** e sabemos que esse CPF é válido. 
        
    // Outra regra muito importante é que CPFs com números iguais 
    // como: `111.111.111-11`, `222.222.222-22`, entre outros, são CPFs 
    // válidos pelo algoritmo mas não existem no registro oficial. Assim esse 
    // tipo de CPF não pode ser usado.
  
    // Você deve criar uma função que receba o CPF no formato “xxx.xxx.xxx-xx” 
    // e faça uma validação do valor recebido. Caso o CPF recebido seja válido 
    // retorne um `True` e caso seja inválido retorne `False`

    //Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
const verificaPrimeiroDigito = (digitos: string): boolean => {
let multiplicador = 10,
somatorio = 0;
for (var _i = 0; _i < digitos.length - 2; multiplicador--, _i++) {
var digito = Number(digitos.charAt(_i));
somatorio += digito * multiplicador;
}
let modOnze = somatorio % 11;
let resultado = 11 - modOnze;
if (resultado >= 10) {
resultado = 0;
}
return resultado === Number(digitos.charAt(9));
};
//Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
const verificaSegundoDigito = (digitos: string): boolean => {
let multiplicador = 11,
somatorio = 0;
for (var _i = 0; _i < digitos.length - 1; multiplicador--, _i++) {
var digito = Number(digitos.charAt(_i));
somatorio += digito * multiplicador;
}
let modOnze = somatorio % 11;
let resultado = 11 - modOnze;
if (resultado >= 10) {
resultado = 0;
}
return resultado === Number(digitos.charAt(10));
};

function mesmosDigitos(cpf: string) {
var i = cpf.length;
var char = cpf.charAt(0);
while (i--) {
if (cpf[i] !== char) {
  return false;
}
}
return true;
}

const funcao10 = (cpf: string): boolean => {
//Limpando . e - da string
let cpfApenasNumeros = cpf.split(".").join("");
cpfApenasNumeros = cpfApenasNumeros.replace("-", "");
//Verificação se todos são os mesmos numeros
if (!mesmosDigitos(cpfApenasNumeros)) {
//Verificação dos digitos
if (verificaPrimeiroDigito(cpfApenasNumeros)) {
  if (verificaSegundoDigito(cpfApenasNumeros)) {
    return true;
  }
}
}
return false;
};
//Testes
console.log(funcao10("111.111.111-11"));//False
console.log(funcao10("145.382.206-20"));//True
console.log(funcao10("123.123.123-80"));//False

// - Exercício 11

//     Escreva uma função para converter de números normais para algarismos romanos (`string`).

//     Os romanos eram bem inteligentes. Eles conquistaram a maior parte da Europa e a governaram por centenas de anos. Inventaram estradas de concreto e até biquínis. Uma coisa que eles 
  //  nunca descobriram foi o número zero. Isso tornou a escrita e a datação de histórias extensas de suas façanhas um pouco mais desafiadoras, mas o sistema de números que eles criaram ainda está em uso hoje. 

//     Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter números maiores que cerca de 3000. (Os próprios romanos não tendiam a ir mais alto)

//     A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.

//     Para ver isso na prática, considere o exemplo de 1990.

//     Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC


const funcao11 = (numeroInicial: number): string => {
const numRomanos: { [key: string]: number } = {
M: 1000,
CM: 900,
D: 500,
CD: 400,
C: 100,
XC: 90,
L: 50,
XL: 40,
X: 10,
IX: 9,
V: 5,
IV: 4,
I: 1
};
let romanos = "",
i;
for (i in numRomanos) {
while (numeroInicial >= numRomanos[i]) {
  romanos += i;
  numeroInicial -= numRomanos[i];
}
}
return romanos;
};
console.log(funcao11(1990)); 
console.log(funcao11(2193));
