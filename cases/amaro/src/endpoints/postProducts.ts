import { Request, Response } from "express";
import {v4 as idCreate} from "uuid";
import { connection } from "../index";

export default async function createProduct(
    req: Request,
    res: Response
 ):Promise<any> {
   try {
    const { name, image_url } = req.body;
    if(!name){
      throw new Error("Você precisa informar um nome")
    }
    if(!image_url){
      throw new Error("Você precisa informar a URL de uma imagem válida")
    };

    await connection("amaro_products1")
    .insert({
    id:idCreate(),
    name,
    image_url
    })
    
    res.status(201).send("Produto criado com sucesso")
          
   } catch (error: any) {
    res.status(400).send(error.message)
   }
 }