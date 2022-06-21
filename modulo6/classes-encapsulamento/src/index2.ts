import  {Request, Response} from "express"
import moment from "moment"
import { uuid } from "uuidv4"
import insertTask from "../data/insertTask"
import {connection} from "../index"

export default async function createUser (
    req:Request,res:Response
    
    ){
        try{
            if(
                !req.body.title || 
                !req.body.description ||
                !req.body.deadline || 
                !req.body.authorId
            ){ 
            res.status(400).send({
               message: "Preencha os campos : title, description, deadline e authorId"
            })
           return
        }
    
        const dateDiff:number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()
    
        if(dateDiff <= 0){
            res.status(400).send({
                message: "deadline deve ser uma data futura"
             })
             return
        }
        const id=uuid()
    
        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.deadline,'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.authorId
        )
     res.status(200).send({
            message: "Tarefa criada com sucesso",
            id,
            deadline: req.body.deadline
        })
    
        } catch (error:any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
            }
        }