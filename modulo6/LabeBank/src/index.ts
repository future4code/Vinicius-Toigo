import express, {Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import {Usuario,usuarios} from './data'
import {Errors} from './Errors'

const app = express();
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


app.get('/contas', (request :Request,response: Response)=>{
    let users = usuarios.map((user)=> user)
    response.status(200).send(usuarios);
   
})

app.post('/criarConta', (req, res)=>{
    try {
        const { nome, cpf, data, saldo }: Usuario = req.body
    
        const checkDateBirth = (birth: string): boolean => {
            const atualDate = new Date().getTime()
            const birthDate: number = Date.parse(birth.split("/").reverse().join("/"))
            const age = (atualDate - birthDate) * (3.17 * 10 ** -11)
            return age >= 18
        }
    
        const checkCPF = usuarios.find((conta)=>{
            return cpf === conta.cpf
        })
    
        if(!checkDateBirth(data)){
            throw new Error(Errors.NOT_AUTHORIZED.message)
        }
    
        if(checkCPF){
            throw new Error(Errors.CPF_EXISTS.message)}
            const newAcount: Usuario = {
                nome,
                cpf,
                data,
                saldo,
                extrato:[]
            }
            usuarios.push(newAcount)
            res.status(201).send("Conta criada")
      }catch (error: any) {
        switch (error.message){
          case Errors.NOT_AUTHORIZED.message:
          res.status(Errors.NOT_AUTHORIZED.status).send(error.message)
          break;
          case Errors.CPF_EXISTS.message:
          res.status(Errors.CPF_EXISTS.status).send(error.message)
          break;
        }
      }
    })
    
app.get('/VisualizarSaldo/:cpf', (req:Request,res:Response) => {

    const cpfNovo = req.params.cpf		
    const verificacpf = usuarios.map((user) => user.cpf).flat(1);
    const cpfVerificado = verificacpf.filter((verifica: any) => verifica == req.params.cpf);

    if (cpfVerificado[0] !== cpfNovo) {
        res.status(404).send("CPF Invalido!")
        return
    }

let contas = usuarios.filter((cliente: any) => {
return	 cliente.cpf == req.params.cpf
    }).map(a => a.saldo).toString()

res.status(200).send(contas)
})

app.put('/adicionarSaldo/:cpf',(req:Request,res:Response) => {

    let adicionarSaldo = usuarios.find((saldo: any) => {
		return saldo.cpf == req.params.cpf
	})
	if (!adicionarSaldo) {
		res.status(404).send("Não foi possível atualizar o saldo")
		return
	}
	adicionarSaldo.saldo = req.body.saldo
	res.status(201).send(usuarios)
})


app.post("/pagarConta/:cpf",(req:Request,res:Response)=>{

	let {data,descricao,valor}=req.body
	const cpf=req.params.cpf
	const user=usuarios.find(user=>user.cpf===cpf)

	if (!data) {
		let newData=new Date()
		
		user?.extrato.push({data,descricao,valor})
	}
	if (!user) {
		throw new Error(Errors.USER_NOT_FOUND.message);

	}
	user?.extrato.push({data,descricao,valor})
	res.status(200).send(user)
})

app.put("/contas/transferencia", (req: Request, res: Response) => {
    try {
      const cpf = req.body.cpf;
      const { deposito } = req.body;
  
      const contaComNovoSaldo = usuarios.find(
        (usuario) => usuario.cpf === cpf
      );
      if (!contaComNovoSaldo) {
        throw new Error(Errors.MISSING_PARAMETERS.message);
      }
      if (typeof deposito !== "number") {
        throw new Error(Errors.DEPOSITO_PRECISA_SER_NUMBER.message);
      }
      if (deposito <= 0) {
        throw new Error(Errors.DEPOSITO_PRECISA_SER_POSITIVO.message);
      }
      contaComNovoSaldo.saldo += deposito;
      res.status(200).send("Depósito efetuado com sucesso!");
    } catch (error: any) {
      switch (error.message) {
        case Errors.MISSING_PARAMETERS.message:
          res
            .status(Errors.MISSING_PARAMETERS.status)
            .send(Errors.MISSING_PARAMETERS.message);
          break;
        case Errors.DEPOSITO_PRECISA_SER_NUMBER.message:
          res
            .status(Errors.DEPOSITO_PRECISA_SER_NUMBER.status)
            .send(Errors.DEPOSITO_PRECISA_SER_NUMBER);
          break;
        case Errors.DEPOSITO_PRECISA_SER_POSITIVO.message:
          res
            .status(Errors.DEPOSITO_PRECISA_SER_POSITIVO.status)
            .send(Errors.DEPOSITO_PRECISA_SER_POSITIVO.message);
          break;
        default:
          res
            .status(Errors.SOMETHING_WENT_WRONG.status)
            .send(Errors.SOMETHING_WENT_WRONG.message);
          break;
      }
    }
  });