export type User = {
    id:string,
    name: string,
    email: string,
    password: string
}


export interface CreateUserDTO  {
    name:string,
    email:string,
    password:string
}