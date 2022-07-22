import app from './app';
import SignUpController from './presentation/signup';
import { Request, Response, NextFunction } from "express";
import 'express-async-errors'; // https://www.npmjs.com/package/express-async-errors
import { UserBusiness } from "./business/user";
import { IdGenerator } from "./services/id-generator";
import { TokenGenerator } from "./services/token-generator";
// import knex from 'knex'
// import dotenv from 'dotenv'

// dotenv.config()

// export const connection = knex({
//    client: 'mysql',
//    connection: {
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: process.env.DB_NAME,
//       port: 3306
//    }
// })

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const hashGenerator = {
    hash: async (text: string) => 'hash'
};
// se conecta ao banco de dados de verdade
const userRepository = {
    createUser: async (user: any) => true
};

const userBusiness = new UserBusiness(
    idGenerator,
    hashGenerator,
    userRepository,
    tokenGenerator
);

app.post('/user', SignUpController(userBusiness));
// app.get('/session', LoginController(userBusiness));
// app.post('/user', SignUpController);
// app.post('/user', SignUpController);
// app.post('/user', SignUpController);
// app.post('/user', SignUpController);


app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status).send(error.message);
})

app.get('/users/profile/:id',getUserByID)

function getUserByID(arg0: string, getUserByID: any) {
    throw new Error('Function not implemented.');
}
