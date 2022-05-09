import  {Request, Response} from "express"
import insertUser from "../data/insertUser"
import {uuid} from "uuidv4"

export default async function createUser  (
req:Request,res:Response

){

try{ 
    if(
        !req.body.name ||
        !req.body.email ||
        !req.body.password
    ){
        res.status(400).send("Preencha os campos : name,email e password")
    }
    const id=uuid()

    await insertUser(
        id,
        req.body.name,
        req.body.email,
        req.body.password
    )
    res.status(200).send ('Usuário criado com sucesso')
    
} catch (error:any) {
    res.status(400).send({
        message: error.message || error.sqlMessage
    })
        }
    }



