import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";
import { Friend, FriendInputDTO } from "../model/Friend";

export class FriendController {
  constructor(private friendBusiness: FriendBusiness) {}

  async beFriendController(req: Request, res: Response) {
    try {
      const { user, makeFriendship } = req.body;

      const friend: FriendInputDTO = {
        user,
        makeFriendship,
      };
      await this.friendBusiness.beFriendBusiness(friend);

      res.status(201).send({
        message: "Friendship accepted successfully!",
      });
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }

  async getPostFriendsController(req: Request, res: Response) {
    try {
      const sort = req.query.sort === "user" ? "user" : "user";
      const order = req.query.order === "DESC" ? "DESC" : "ASC";
      const makeFriendship = req.query.makeFriendship as string;

      const postFriend = await this.friendBusiness.getPostFriendsBusiness(
        sort,
        order,
        makeFriendship
      );
      res.status(200).send(postFriend);
    } catch (error: any) {
      res.status(error.statusCode).send(error.sqlMessage || error.message);
    }
  }

  async dontFriendController(req: Request, res: Response) {
    try {
      const makeFriendship = req.query.makeFriendship as string
      const user = req.query.user as string

      await this.friendBusiness.dontFriendBusiness(user, makeFriendship );

      res.status(201).send({
        message: "Friendship successfully broken!",
      });
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  }
}
