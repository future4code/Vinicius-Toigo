import { UserRepository } from "../business/UserRepository";
import { BaseError } from "../Error/BaseError";
import { Signup, User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase implements UserRepository {

    private static TABLE_NAME = "cookenu_user"

    async signup(signup: Signup): Promise<void> {
        try {
            await UserDataBase.connection
                .insert(signup)
                .into(UserDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    async findUserEmail(email: string): Promise<User> {
        try {
            const user = await UserDataBase.connection
                .select(`*`)
                .where({ email })
                .into(UserDataBase.TABLE_NAME)

            return user[0]

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    async selectByUser(id: string): Promise<User> {
        try {

            const user = await UserDataBase.connection
                .select("id", "name", "email")
                .where({id})
                .into(UserDataBase.TABLE_NAME)

            return user[0]
        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    async selectUserById(id: string): Promise<User> {
        try {
            const user = await UserDataBase.connection
                .select("name", "email")
                .where({ id })
                .into(UserDataBase.TABLE_NAME)

            return user[0]
        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }
}