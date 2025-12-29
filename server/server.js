import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())
connectDB()

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>console.log('Server is running at port',port));