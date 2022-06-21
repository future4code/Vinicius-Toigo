
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {

  public insertUser =async (
    id: string, 
    name: string, 
    email: string,
    password: string
    ) => {
	
    try {
      await UserDataBase.connection().insert({
          id,
          name,
          email,
          password,
        })
        .into("User_Arq");
    } catch (error: any) {
       
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public getAllUsers=async():Promise<any>=> {
    try {
       const users=[]

       const res=await BaseDatabase.connection.select().into("User_Arq")
       for(let user of res){
          users.push(user);
    }

       return users;
    } catch (error:any) {
       throw new Error(error.sqlMessage || error.message)
    }
 }
 public deleteUser=async(id:string):Promise<void>=> {
  try {
     await BaseDatabase.connection.where({id}).from("User_Arq").delete()
  } catch (error:any) {
     throw new Error(error.sqlMessage || error.message)
  }
}

}

