import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController {
    constructor(private userBusiness: UserBusiness) {}
    async createUserController (req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
    
            const newUser: UserInputDTO = {
                name,
                email,
                password
            }
            
            await this.userBusiness.createBusiness(newUser)

            res.status(201).send({
                message: `User ${name} created successfully!`
            })
            
        } catch (error: any) {
            console.log(error.statusCode)
            res.status(error.statusCode).send(error.message)
        }
    }
}