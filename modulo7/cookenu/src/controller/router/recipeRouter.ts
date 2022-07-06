import express from "express";
import { RecipeBusiness } from "../../business/RecipeBusiness";
import { RecipeDataBase } from "../../data/RecipeDataBase";
import { RecipeController } from "../RecipeController";

export const recipeRouter = express.Router();

const recipeDataBase = new RecipeDataBase()
const recipeBusiness = new RecipeBusiness(recipeDataBase)
const recipeController = new RecipeController(recipeBusiness)

recipeRouter.post("/recipe", (req, res) => recipeController.createRecipeController(req, res))
recipeRouter.get("/recipe/:id", (req, res) => recipeController.recipeByIdController(req, res))