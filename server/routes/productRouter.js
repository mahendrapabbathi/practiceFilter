import express from 'express'
import { adminAuth } from '../middleware/adminAuth.js';
import { AddProduct, ListProduct, RemoveProduct, SingleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

productRouter.post('/add',upload.fields([{name:'img',maxCount:1}]),adminAuth,AddProduct)
productRouter.get('/list',ListProduct)
productRouter.post('/remove',adminAuth,RemoveProduct)
productRouter.post('/single',SingleProduct)

export default productRouter