import { Signup, User } from "../model/User"

export interface UserRepository {
    signup(signup: Signup): Promise<void>
    findUserEmail(email: string): Promise<User>
    selectByUser(id:string): Promise<User>
    selectUserById(id: string): Promise<User>
}