import express from "express"
import { UserBusiness } from "../../business/UserBusiness"
import { UserController } from "../UserController"
import { UserDataBase } from "../../data/UserDataBase"

export const userRouter = express.Router()

const userDataBase = new UserDataBase()
const userBusiness = new UserBusiness(userDataBase)
const userController = new UserController(userBusiness)

userRouter.post("/create", (req, res) => userController.createUserController(req, res))