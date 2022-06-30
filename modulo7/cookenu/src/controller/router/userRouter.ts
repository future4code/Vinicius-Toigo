import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDataBase } from "../../data/UserDataBase";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userDataBase = new UserDataBase()
const userBusiness = new UserBusiness(userDataBase)
const userController = new UserController(userBusiness)

userRouter.post("/signup", (req, res) => userController.signupController(req, res))
userRouter.post("/login", (req, res) => userController.loginController(req, res))
userRouter.get("/user", (req, res) => userController.findUserController(req, res))
userRouter.get("/user/:id", (req, res) => userController.getUserByIdController(req, res))