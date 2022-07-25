
import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";

import { selectAllProducts } from './endpoints/getProducts';
import createProduct from './endpoints/postProducts';

const app: Express = express();
import dotenv from "dotenv";
app.use(express.json());
app.use(cors());

app.get ('/products', selectAllProducts)
app.post ('/products', createProduct)




























export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});