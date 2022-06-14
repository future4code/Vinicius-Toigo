import { User, Users } from "../model/User";

export interface UserRepository {
    insertUser(user: User): Promise <void>
    findUserEmail(email: string): Promise<Users>
}