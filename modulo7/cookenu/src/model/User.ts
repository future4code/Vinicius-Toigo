export interface Signup {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface Login {
    email: string,
    password: string
}

export interface AuthenticationData {
    id: string
}

export interface User {
    id: string,
    name: string,
    email: string,
    password: string
}