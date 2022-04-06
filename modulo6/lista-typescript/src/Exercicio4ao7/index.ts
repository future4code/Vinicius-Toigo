// Exercício 4


enum SETORES {

    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="financeiro",
    
    }
    
    type colaboradores = {
    
    nome:string,
    salario:number, 
    setor:SETORES, 
    presencial:boolean
    
    }
    
    const listaColaboradores:colaboradores[]=[
    
        { nome: "Marcos", salario: 2500, setor:SETORES.MARKETING, presencial: true },
        { nome: "Maria" ,salario: 1500, setor:SETORES.VENDAS, presencial: false},
        { nome: "Salete", salario: 2200, setor: SETORES.FINANCEIRO, presencial: true },
      { nome: "João", salario: 2800, setor: SETORES.MARKETING, presencial: false },
      { nome: "Josué", salario: 5500, setor: SETORES.FINANCEIRO, presencial: true },
      { nome: "Natalia", salario: 4700, setor: SETORES.VENDAS, presencial: true },
      { nome: "Paola", salario: 3500, setor: SETORES.MARKETING, presencial: true }
    
    ]
    
    const funcaoColaboradores = (lista: colaboradores[]): colaboradores[] => {
      const listaFiltrada: colaboradores[] = lista.filter((colaborador) => {
        return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
      });
      return listaFiltrada;
    }
    console.log(funcaoColaboradores(listaColaboradores))
    
    // - Exercício 5
    
    enum ROLE {
      USER="user",
      ADMIN="admin",
    }
    
    type user = {
      name: string;
      email: string;
      role: ROLE;
    };
    
    const Usuarios: user[] = [
    
        {name: "Rogério", email: "roger@email.com", role:ROLE.USER},
        {name: "Ademir", email: "ademir@email.com", role:ROLE.ADMIN},
        {name: "Aline", email: "aline@email.com", role:ROLE.USER},
        {name: "Jéssica", email: "jessica@email.com", role:ROLE.USER},  
        {name: "Adilson", email: "adilson@email.com", role:ROLE.USER},  
        {name: "Carina", email: "carina@email.com", role:ROLE.ADMIN }      
    ];
    
    
    const funcaoRetornaEmails =(role:user[]): string[]=>{
    
      const emailList: string[] = role
      .filter((user) => user.role=== ROLE.ADMIN)
      .map((user)=> user.email)
      return emailList
    
    }
    
    console.log(funcaoRetornaEmails(Usuarios));
    
    
    // Exercício 6 
    
    
    [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]
    
    
    
    type conta = {
      cliente: string;
      saldoTotal: number;
      debitos: number[];
    };
    
    const listaClientes: conta [] = [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ] 
    
    const funcaoDescontaDebito = (lista:conta[]) : conta [] => {
    
      lista.forEach((cliente)=>{
        const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
        cliente.saldoTotal -= totalDebitos,
        cliente.debitos=[];
      });
      const contasNegativas = lista.filter((conta)=> conta.saldoTotal <0);
      return contasNegativas;
    
    
    };
    console.log(funcaoDescontaDebito(listaClientes));
    
    
    
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
    
    