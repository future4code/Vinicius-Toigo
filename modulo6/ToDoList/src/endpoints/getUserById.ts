import  {Request, Response} from "express"
import {connection} from "../index"
import {uuid} from "uuidv4"
import selectUserById from "../data/selectUserById"

export default async function getUserByID (
req:Request,res:Response

){
    try{
       
        const user = await selectUserById(req.params.id)

        if(!user){
            res.status(404).send
            ({message:"Usuário não encontrado"
        })
        }
            
        res.status(200).send({
        id: user.id,
        nickname: user.nickname
    })
    } catch (error:any) {
    res.status(400).send({
        message: error.message || error.sqlMessage
    })
        }
    }

