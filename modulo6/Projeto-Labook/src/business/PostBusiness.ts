import { PostRepository } from "./PostRepository";
import { invalidPost } from "../error/CustomErrorPost";
import { MissingFieldsToComplete } from "../error/MissingFieldsComplet";
import { PostInputDTO, Post, Posts } from "../model/Post";

export class PostBusiness {
  constructor(private postDataBase: PostRepository) {}
  async createPostBusiness(input: PostInputDTO) {
    try {
      const { photo, description, creationData, type, userId } = input;
      if (!photo || !description || !creationData || !type || !userId) {
        throw new MissingFieldsToComplete();
      }

      const id = Date.now().toString();

      const post: Post = {
        id,
        ...input,
      };

      await this.postDataBase.insertPost(post);

      return post;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async selectPostIdBusiness(id: string): Promise<Posts[]> {
    try {
      const post = await this.postDataBase.selectPostId(id);

      if (!post) {
        throw new invalidPost();
      }

      return post;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
