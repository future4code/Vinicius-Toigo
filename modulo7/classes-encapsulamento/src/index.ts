import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//Exercício 1

// Analise a classe `UserAccount` abaixo. 
// Perceba quais propriedades são públicas e quais 
// são privadas e responda as perguntas discursivas 
// em comentários no arquivo `index.ts`

// a) *Para que serve o construtor dentro de uma
// classe e como fazemos para chamá-lo?*

// RESPOSTA 
// O construtor é um método especial para criar e 
// inicializar um objeto 
// criado a partir de uma classe.

// b) *Copie o código abaixo para o seu exercício de 
// hoje; crie uma instância dessa classe (dê o nome, 
// cpf e idade que você quiser). Quantas vezes a 
// mensagem `"Chamando o construtor da classe User"` 
// foi impressa no terminal?*


class UserAccount {
	private cpf: string;
	private name: string;
	private age: number;
	private balance: number = 0;
	private transactions: Transaction[] = [];

	constructor(
	   cpf: string,
	   name: string,
	   age: number,
	) {
	   console.log("Chamando o construtor da classe UserAccount")
	   this.cpf = cpf;
	   this.name = name;
	   this.age = age;
	}
    public getCpf() : string {
		return this.cpf
	}


	public getName() : string {
		return this.name
	}


	public getAge() : number {
		return this.age 
	}


	public getBalance() : number {
		return this.balance
	}


	public getTransactions() : Transaction[] {
		return this.transactions
	}

      }
const user1=new UserAccount("001.992.034-00","Vinicius",20)

console.log(user1);

//RESPOSTA 
//Uma vez

// c) *Como conseguimos ter acesso às propriedades 
// privadas de uma classe?*

// RESPOSTA
// Para ter acesso às propriedades privadas de uma 
// classe, você terá que adicionar métodos públicos 
// que proporcionem isso. Ex: Se preciso ter acesso à 
// propriedade CPF da minha classe UserAccount, 
// devo implementar o método :

// public getCpf(): string {
// 	return this.cpf
// }

// - Exercício 2
    
//     Transforme a variável de tipo abaixo, chamada 
//     `Transaction` em uma classe `Transaction`. Ela 
//     deve conter as mesmas propriedades: *data*, 
//     *valor* e *descrição*. Agora, porém, todas elas 
//     devem ser **privadas**. Portanto, crie métodos 
//     (*getters*) para a leitura desses valores, tanto 
//     para essa classe quanto para a classe UserAccount. 
//     Crie uma instância dessa classe e adicione à 
//     instância já criada de UserAccount

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

class Transaction {
    private description: string;
    private value: number;
    private date: string;
  
    constructor(description: string, value: number, date: string) {
      this.description = description;
      this.value = value;
      this.date = date;
    }
  
    public getDescription() {
      return this.description;
    }
    public getValue() {
      return this.value;
    }
    public getDate() {
      return this.date;
    }
  }
  
  

//   - Exercício 3
    
//     Crie uma classe **Bank**, que será responsável por 
//     guardar todos os dados da aplicação. Ela deve possuir 
//     a propriedades *accounts*, privada 
//     (crie os *getters* e *setters* que achar apropriado).

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    public getAccounts() : UserAccount[] {
    return this.accounts
}

    public setAccounts(account : UserAccount[]) {
    this.accounts = account;
}

} 