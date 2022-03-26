enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome:string,
    anoLancamento:string | number
    genero: GENERO
    nota? : number
}

function Filmes(
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    nota?: number ):
    
    Filme {
    const filme: Filme = {
        nome,
        anoLancamento,
        genero,
        nota,
    }
    return filme
}