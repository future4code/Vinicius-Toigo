// - **Exercício 2**

    function obterEstatisticas(numeros :number[]):Object {
    
        const numerosOrdenados:number[] = numeros.sort(
            (a, b) => a - b
        )
    
        let soma:number = 0
        let num:number
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas:Object = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
    type AmostraDeDados = {

        numeros:number[],
    
        obterEstatisticas: {numeros:number[]}
    } 
