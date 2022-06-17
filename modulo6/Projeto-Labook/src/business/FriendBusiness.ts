import {
  invalidBeFriendsAgain,
  invalidMakeFriendship,
  invalidYouBeYourFriend,
} from "../error/CustomErrorFriend";
import { invalidPost } from "../error/CustomErrorPost";
import { MissingFieldsToComplete } from "../error/MissingFieldsComplet";
import { Friends, FriendInputDTO } from "../model/Friend";
import { FriendRepository } from "./FriendRepository";

export class FriendBusiness {
  constructor(private friendDataBase: FriendRepository) {}

  async beFriendBusiness(input: FriendInputDTO) {
    try {
      if (!input.makeFriendship) {
        throw new invalidMakeFriendship();
      }

      if (input.user === input.makeFriendship) {
        throw new invalidYouBeYourFriend();
      }

      const friendDataBase = new Friends(input.user, input.makeFriendship);
      const friend = await this.friendDataBase.selectAllFriends(friendDataBase);

      if (friend) {
        throw new invalidBeFriendsAgain();
      }

      const newFriend: FriendInputDTO = {
        ...input,
      };

      await this.friendDataBase.beFriend(newFriend);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getPostFriendsBusiness(
    sort: string,
    order: string,
    makeFriendship: string
  ) {
    try {
      const getPostFriend = await this.friendDataBase.getFeedFriends(
        order,
        sort,
        makeFriendship
      );

      if (getPostFriend.length < 1) {
        throw new invalidPost();
      }

      if (!makeFriendship) {
        throw new invalidMakeFriendship();
      }

      return getPostFriend;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async dontFriendBusiness(user: string, makeFriendship: string) {
    try {
      if (!makeFriendship || !user) {
        throw new MissingFieldsToComplete();
      }

      await this.friendDataBase.dontFriendsUser(user, makeFriendship);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
