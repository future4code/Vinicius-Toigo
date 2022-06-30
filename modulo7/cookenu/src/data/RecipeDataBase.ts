import { RecipeRepository } from "../business/RecipeRepository"
import { BaseError } from "../Error/BaseError"
import { Recipe } from "../model/Recipe"
import { BaseDataBase } from "./BaseDataBase"

export class RecipeDataBase extends BaseDataBase implements RecipeRepository {

    private static TABLE_NAME = "cookenu_recipe"

    async createRecipe(recipe: Recipe): Promise<void> {
        try {
            await RecipeDataBase.connection
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    created_at: recipe.createdAt,
                    author_id: recipe.authorId
                })
                .into(RecipeDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    async selectRecipeById(id: string): Promise<Recipe> {
        try {
            const [recipe] = await RecipeDataBase.connection
                .select("id", "title", "description", "created_at as createdAt")
                .where({ id })
                .into(RecipeDataBase.TABLE_NAME)


            return recipe

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }
}