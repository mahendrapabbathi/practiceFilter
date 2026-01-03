import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import connectCloudinary from './config/cloudinary.js';
import cartRouter from './routes/cartRouter.js';

const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>console.log('Server is running at port',port));