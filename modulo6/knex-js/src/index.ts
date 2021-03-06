import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

dotenv.config();

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

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result
  }

  app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error:any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }

// Exercício 1 

// a) O raw devolve exatamente o que o banco MySQL devolveu.

// b) 

 const getActorByName = async (name:string): Promise <any> => {
    const result = await connection.raw
    ( `SELECT * FROM Actor WHERE name = '${name}' `)
    return result[0][0]
}

// c) 

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw
    (` SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}" `);
    const count = result[0][0].count;
    return count;
  };

  // Exercício 2

  // a) 

  const updateActorSalary = async (
    id: string,
    salary: number
  ):Promise<any> => {
    await connection("Actor")
    .update ({
        salary:salary
    })
    .where ("id",id)
  };
    
  // b) 

  const deleteActor = async (
    id: string,
  ):Promise<any> => {
    await connection("Actor")
    .delete()
    .where ("id",id)
  };
    
// c)  

const avgSalaryGender = async (
    gender: string
   
  ):Promise<any> => {
    const result = await connection("Actor")
    .avg ("salary as average")
    .where ({gender})
    
    return result[0].average;
  };

  // Exercício 3 

  // a)  

  app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// b)              

const countActor=async(gender:string):Promise<any>=>{
    const res=await connection("Actor").count().where({gender})
    return res
  }
  app.get("/actor",async(req:Request,res:Response)=>{
    try {
      const gender:any=req.query.gender
      const actor:any=await countActor(gender as string)
      res.status(200).send({quantity:actor})
      } catch (err:any) {
        res.status(400).send({
          message: err.message,
        });
    }
  })

    // Exercício 4

    // a)  

    app.put("/actor", async (req: Request, res: Response) => {
        try {
          await updateActorSalary(req.body.id, req.body.salary);
          res.status(200).send({
            message: "Success",
          });
        } catch (err) {
          res.status(400).send({
            message: err.message,
          });
        }
      });

      // b)  

     app.delete("/actor/:id",async (req:Request,res:Response) => {
  try {
    const id=req.params.id
    await deleteActor(id)
    res.status(200).send({message:"Success"})
  } catch (error:any) {

  }
}) 