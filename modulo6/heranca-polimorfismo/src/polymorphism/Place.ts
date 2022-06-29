export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
// const place1=new Place("52148-985")
//Erro: Não é possível criar uma instância de uma classe abstrata.ts(2511)

//b) Seria necessário criar a instância de outra classe que extenda de Place
