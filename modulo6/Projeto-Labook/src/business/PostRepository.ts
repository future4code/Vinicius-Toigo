import { Post, Posts } from "../model/Post"

export interface PostRepository {
    insertPost(post: Post): Promise <void>
    selectPostId(id: string): Promise<Posts[]>
}