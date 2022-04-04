// - Exercício 7
    
   
const ajustaPreco = (preco :number): string => {
    const valorAjustado: string = preco.toFixed(2).replace('.', ',')
    return "R$ "+valorAjustado
}

[
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

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
