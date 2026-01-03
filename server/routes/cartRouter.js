import express from 'express'
import { userAuth } from '../middleware/userAuth.js';
import { addToCart, decreaseCartItem, getUserCart, increaseCartItem } from '../controllers/cartController.js';

const cartRouter = express.Router();

cartRouter.post('/get',userAuth, getUserCart)
cartRouter.post('/add',userAuth, addToCart)
cartRouter.post('/increase',userAuth, increaseCartItem)
cartRouter.post('/decrease',userAuth, decreaseCartItem)

export default cartRouter;