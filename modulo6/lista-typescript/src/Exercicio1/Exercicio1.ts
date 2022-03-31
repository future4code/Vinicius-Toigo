// - Exercício 1
    
//     Crie um função que receba uma `string` com o nome 
//     e outra `string` com uma data de nascimento 
//     (ex.: “24/04/1993”). A função deve separar o dia,
//     o mês e ano e retornar uma `string` no seguinte
//     formato:

// const nome:string="Vinícius"
// const dia:number=17
// const mes:string="junho"
// const ano:number=2001


// console.log(`Olá, me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)

function recebeDadosUsuario(nome: string, dataDeNascimento: string) : string {
    const data: string[] = dataDeNascimento.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}`
} 