import express, {Express,Request,Response} from'express';
import dotenv from 'dotenv';
import cor from 'cors';
import { userRouter } from './routes/userRoute';
dotenv.config();

const app:Express = express();
app.use(express.urlencoded({extended:true}));
app.use(cor());
const port = process.env.PORT;
app.use("/users",userRouter);
app.get('/',(req:Request, res:Response) => {
    res.send('Express + TypeScript Server');
});
app.listen(port,()=>{
    console.log(`[server]: Server is running at https://localhost:${port}`);
});

function cors(): any {
    throw new Error('Function not implemented.');
}
