
import { IdGenerator} from "../services/id-generator"
import {TokenGenerator} from "../services/token-generator"
import { User } from "../domain/user";
import hashGenerator from "../services/hash-generator";

export class UserBusiness {
 userDatabase: any;

 public async signup(
  name: string,
  email: string,
  password: string,
  role: string
) {
  try {
     if (!name || !email || !password || !role) {
        throw new Error("Missing input");
     }

     if (email.indexOf("@") === -1) {
        throw new Error("Invalid email");
     }

     if (password.length < 6) {
        throw new Error("Invalid password");
     }

     const id =  IdGenerator.generate();

     const cypherPassword = await hashGenerator.hash(password);

     await this.userDatabase.createUser(
      new User(id, name, email, password,)
     )

   const accessToken = TokenGenerator.generate({
      id,
      role,
   });
   return { accessToken };
} catch (error:any) {
   if (error.message.includes("key 'email'")) {
      throw new Error("Email already in use")
   }

   throw new Error(error.message)
}

}

