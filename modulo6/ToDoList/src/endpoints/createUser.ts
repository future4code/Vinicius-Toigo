import  {Request, Response} from "express"
import insertUser from "../data/insertUser"
import {connection} from "../index"
import {uuid} from "uuidv4"

export default async function createUser (
req:Request,res:Response

){
    try{
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){ 
        res.status(400).send("Preencha os campos : name,nickname e email")
        }
        const id=uuid()

        await  insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        
        res.status(200).send('Usuário criado com suceso')
            
    } catch (error:any) {
    res.status(400).send({
        message: error.message || error.sqlMessage
    })
        }
    }

