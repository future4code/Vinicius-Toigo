import { UserRepository } from "../business/UserRepository";
import { Users, User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase implements UserRepository {

    private static TABLE_NAME = "labook_user"

    async insertUser (user: User) {
        try {
            await BaseDataBase.connection
            .insert(user)
            .into(UserDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    findUserEmail = async(email: string): Promise <Users> => {
        try {
            const user = await BaseDataBase.connection
            .select("*")
            .where({email})
            .into(UserDataBase.TABLE_NAME)

            return user[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
     }
}