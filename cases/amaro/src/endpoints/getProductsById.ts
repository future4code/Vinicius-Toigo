import express from "express";
import { connection } from "../index";
import { Request, Response } from "express";


export async function getProductsById(req: Request, res: Response):Promise<any> {

	try{  
		const {id}= req.params
		const result = await connection("amaro_products1")
        .where({id})

		 res.status(200).send(result)
} catch (error: any) {
	res.send(error.message || error.sqlMessage)
	}
}

