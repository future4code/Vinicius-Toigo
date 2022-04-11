export type Usuario ={

nome:string,
cpf:string,
data:string,
saldo: number
extrato:Extrato[]
}

export enum transacao{
	DEBITO="Débito",
	DEPOSITO="Deposito em dinheiro"
}

export type Extrato = {
	valor: string,
	data: string,
	descricao:transacao.DEBITO| transacao.DEPOSITO
}

export let usuarios: Usuario[] = [
    {
        
        nome: "Alice",
        cpf:"333.444.555-50",
        data: "17/03/2000",
        saldo:0,
        extrato:[]
        

    },
    {
        
        nome: "Vinicius",
        cpf:"222.888.555-50",
        data: "17/03/2000",
        saldo:0,
        extrato:[]
    }


]








