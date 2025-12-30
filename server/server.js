import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB()

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("API is working")
})
app.use('/api/user',userRouter)

app.listen(port,()=>console.log('Server is running at port',port));