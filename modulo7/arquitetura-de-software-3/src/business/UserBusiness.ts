import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { CreateUserDTO } from "../model/user"
import { InvalidEmail, InvalidName } from "../error/customError";

export class UserBusiness {
  public create= async(input: CreateUserDTO) =>{
    try{
      const {name,email, password} = input;

    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)"
      )}
      if (!email.includes ("@")) {
        throw new InvalidEmail()
        }
        if(name.length < 4){
          throw new InvalidName()
        }
        if(!email.includes("@")){
         throw new InvalidEmail()
        }
    
    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    });
  } catch(error: any){
    throw new Error(error.message)
  }
}
  
  async get():Promise<any>{
    const userDatabase = new UserDatabase()
   return await  userDatabase.getAll()
  }
}

