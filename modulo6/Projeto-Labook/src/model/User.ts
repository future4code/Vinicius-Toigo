export class Users {
  constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string
  ){}

    public getId () {
      return this.id
    }
    public getName () {
      return this.name
    }
    public getEmail () {
      return this.email
    }
    public getPassword () {
      return this.password
    }

}

export interface UserInputDTO {
    name:string
    email: string,
    password: string

 }


 export type User = {
   id: string,
   name:string
   email: string,
   password: string
 }
 