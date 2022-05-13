import createUser from "./endpoints/createUser";
import { AddressInfo } from "net";
import express, {Express} from 'express'
import cors from 'cors'
import { getAllUsers } from "./endpoints/getAllUsers";
import { createProduct } from "./endpoints/createProduct";
import { regPurchases } from "./endpoints/purchases";
import { getPurchasesUser } from "./endpoints/getPurchasesUser";
import { selectAllProducts } from "./endpoints/getAllProducts";



const app: Express = express();

app.use(express.json());
app.use(cors());



app.get('/users', getAllUsers)

app.get('/products', selectAllProducts)

app.get('/users/:user_id/purchases',getPurchasesUser)

app.post ('/users', createUser)

app.post ('/products', createProduct)

app.post('/purchases', regPurchases)















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});