import { FriendRepository } from "../business/FriendRepository";
import { Friend, Friends } from "../model/Friend";
import { BaseDataBase } from "./BaseDataBase";

export class FriendDataBase extends BaseDataBase implements FriendRepository{

    private static TABLE_NAME = "labook_friend"

    async beFriend (friend: Friend) {
        try {
             await BaseDataBase.connection
            .insert([
                {user: friend.makeFriendship, make_friendship: friend.user},
                {user: friend.user, make_friendship: friend.makeFriendship}
            ]) 
            .into(FriendDataBase.TABLE_NAME)  

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectAllFriends (friend: Friends) :Promise <Friends> {
        try {

            const [friendsUser] = await BaseDataBase.connection
            .select()
            .where({user: friend.getUser(),
                make_friendship: friend.getMakeFriendship()})
            .into(FriendDataBase.TABLE_NAME)

            return friendsUser 
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getFeedFriends (sort: string, order: string, makeFriendship: string):Promise<Friend[]> {
        try {
             const friendsPost = await BaseDataBase.connection
            .select("labook_friend.make_friendship", "labook_user.name as Usuário",
              "labook_post.photo", "labook_post.description","labook_post.creation_data", "labook_post.type")
            .innerJoin("labook_user", "labook_friend.make_friendship","labook_user.id")
            .innerJoin("labook_post", "labook_friend.make_friendship","labook_post.user_id")
            .where({"labook_friend.user": `${makeFriendship}`})
            .orderBy(order, sort, makeFriendship)
            .into(FriendDataBase.TABLE_NAME)

            return friendsPost

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async dontFriendsUser (user: string, makeFriendship: string): Promise <void> {
        try {
            await BaseDataBase.connection
            .delete()
            .where({user: makeFriendship, make_friendship: user})
            .orWhere({user: user, make_friendship: makeFriendship})
            .into(FriendDataBase.TABLE_NAME) 
         
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
