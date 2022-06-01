import express, {Request, Response} from 'express';
import * as bodyParser from 'body-parser';
import * as userModel from '../models/user'
import {User} from '../types/User'
const userRouter = express.Router();
var jsonParser = bodyParser.json()
userRouter.get("/", async(req:Request, res:Response)=>{
    userModel.findAll((err:Error, users:User[])=>{
        if (err) {
            return res.status(500).json({'errorMessage': err.message});
        }
        res.status(200).json({'data':users});

    })
});
userRouter.post("/",jsonParser, async (req: Request, res: Response) => {
    console.log(req.body);
    const newUser: User = req.body;
    userModel.create(newUser, (err: Error, userId: number) => {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
  
      res.status(200).json({"userId": userId});
    });
  });
export {userRouter};