import { PostRepository } from "../business/PostRepository";
import { Posts, Post } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase implements PostRepository{

    private static TABLE_NAME = "labook_post"

    async insertPost (post: Post) {
        try {
            await BaseDataBase.connection
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                creation_data: post.creationData,
                type: post.type,
                user_id: post.userId
            })
            .into(PostDataBase.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectPostId (id: string): Promise<Posts[]> {
        try {
            const [post] = await BaseDataBase.connection
            .select("labook_user.name as Usuário", "labook_post.photo", "labook_post.description",
            "labook_post.creation_data", "labook_post.type")
            .innerJoin("labook_user", "labook_post.user_id", "labook_user.id")
            .where({"labook_post.id": id})
            .into(PostDataBase.TABLE_NAME)

            return post 
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}