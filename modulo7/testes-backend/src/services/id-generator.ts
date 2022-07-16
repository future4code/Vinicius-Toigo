import { IIdGenerator } from "../business/ports";
import { v4 as uuidv4 } from 'uuid';


export class IdGenerator implements IIdGenerator {
    static generate() {
      throw new Error("Method not implemented.");
    }

    generate() {
        return uuidv4();
    }
}