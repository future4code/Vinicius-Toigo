import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response):Promise<void> => {
        try {
          const { name, nickname, email, password } = req.body;
    
          const input: UserInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };   
      
      public login = async (req: Request, res: Response):Promise<void> => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };  

      public editUser = async (req: Request, res: Response):Promise<void> => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            token: req.headers.authorization! 
          };

          const userBusiness = new UserBusiness()
          await userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}
