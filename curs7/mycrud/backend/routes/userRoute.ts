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
export {userRouter};