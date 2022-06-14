import express from "express";
import { FriendBusiness } from "../../business/FriendBusiness";
import { FriendController } from "../FriendController";
import { FriendDataBase } from "../../data/FriendDataBase";

export const friendRouter = express.Router()

const friendDataBase = new FriendDataBase()
const friendBusiness = new FriendBusiness(friendDataBase)
const friendController = new FriendController(friendBusiness)

friendRouter.get("/feed", (req, res) => friendController.getPostFriendsController(req, res))
friendRouter.post("/friendship", (req, res) => friendController.beFriendController(req, res))
friendRouter.delete("/friendship", (req, res) => friendController.dontFriendController(req, res))