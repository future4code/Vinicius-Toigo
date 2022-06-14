import express from "express";
import { PostBusiness } from "../../business/PostBusiness";
import { PostController } from "../PostController";
import { PostDataBase } from "../../data/PostDataBase";


export const postRouter = express.Router()
const postDataBase = new PostDataBase()
const postBusiness = new PostBusiness(postDataBase)
const postController  = new PostController(postBusiness)


postRouter.post("/create", (req, res) => postController.createPostController(req, res))
postRouter.get("/:id", (req, res) => postController.selectPostIdController(req, res))