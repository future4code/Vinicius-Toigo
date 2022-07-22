import jsonwebtoken from 'jsonwebtoken';
import { ITokenGenerator } from '../business/ports';

export class TokenGenerator implements ITokenGenerator {
    static generate(arg0: { id: void; role: string; }) {
      throw new Error("Method not implemented.");
    }
    generate(args: any) {
        return jsonwebtoken.sign(args, 'hbcdkubcdcnwid');
    }
}
