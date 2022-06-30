import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { invalidRecipe } from "../Error/RecipeError";
import { RecipeInputDTO } from "../model/Recipe";

export class RecipeController {
    constructor(private recipeBusiness: RecipeBusiness) { }

    async createRecipeController(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string

            const { title, description } = req.body

            const recipe: RecipeInputDTO = {
                title,
                description,
                token: token

            }

            await this.recipeBusiness.createRecipeBusiness(recipe)

            res.status(201).send({ message: "Receita criada com sucesso!" })

        } catch (error: any) {
            res.status(error.statusCode).send(error.message)
        }
    }

    async recipeByIdController(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string
            const { id } = req.params

            const recipe = await this.recipeBusiness.recipeByIdBusiness(id, token)

            if(!recipe) {
                throw new invalidRecipe();
            }

            res.status(200).send(recipe)

        } catch (error: any) {
            res.status(error.statusCode).send(error.message)
        }
    }
}