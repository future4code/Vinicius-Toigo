import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()
export abstract class BaseDatabase {

    private static connection: knex | null = null;

    protected getConnection(): knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    port: 3306,
                    multipleStatements: true
                },
              });        
        }

        return BaseDatabase.connection;
    }

    public static async destroyConnection(): Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        }
    }
}