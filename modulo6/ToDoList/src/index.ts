import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import knex from "knex";
import createUser from "./endpoints/createUser";
import getUserByID from "./endpoints/getUserById"
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";

dotenv.config()

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  },
});

const app: Express = express();

app.use(express.json());
app.use(cors());


app.post('/user', createUser)

app.get('/user/:id', getUserByID)

app.post('/user/edit/:id', editUser)

app.put('/user/createTask', createTask)

app.get ('/task/:id', getTaskById)















































const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

