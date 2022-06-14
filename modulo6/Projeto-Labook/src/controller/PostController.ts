import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/Post";
import moment from "moment"

export class PostController {
    constructor(private postBusiness: PostBusiness) {}

    async createPostController (req: Request, res: Response) {
        try{
            const { photo, description, creationData, type, userId } = req.body

            const newPost: PostInputDTO = {
            photo,
            description,
            creationData: moment(creationData, `DD/MM/YYYY`).format(`YYYY-MM-DD`),
            type,
            userId
            }

            await this.postBusiness.createPostBusiness(newPost)

            res.status(201).send({
                message: "Post created successfully."
            })

        }catch (error: any){
            res.status(error.statusCode).send(error.message)
        }
    }

    async selectPostIdController (req: Request, res: Response) {
        try {
            const { id } = req.params
    
            const post = await this.postBusiness.selectPostIdBusiness(id)
    
            res.status(201).send(post)
            
        } catch (error: any) {
            res.status(error.statusCode).send(error.message)
        }
    }
}