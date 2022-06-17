import {
  invalidEmail,
  invalidName,
  invalidPassword,
  invalidUserEmail,
} from "../error/CustomErrorUser";
import { MissingFieldsToComplete } from "../error/MissingFieldsComplet";
import { UserInputDTO, User } from "../model/User";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
  constructor(private userDataBase: UserRepository) {}
  async createBusiness(input: UserInputDTO) {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new MissingFieldsToComplete();
      }

      if (name.length < 6) {
        throw new invalidName();
      }

      if (!email.includes("@")) {
        throw new invalidEmail();
      }

      if (password.length < 6) {
        throw new invalidPassword();
      }

      const userEmail = await this.userDataBase.findUserEmail(email);

      if (userEmail) {
        throw new invalidUserEmail();
      }

      const id = Date.now().toString();

      const user: User = {
        id,
        ...input,
      };

      await this.userDataBase.insertUser(user);

      return user;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
