import express from 'express'
import { adminLogin, login, logout, register } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.post('/logout',logout)

userRouter.post('/admin', adminLogin)

export default userRouter;