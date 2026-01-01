import productModel from "../model/productModel.js";
import { v2 as cloudinary } from 'cloudinary'

// add product 
export const AddProduct = async (req, res) => {
    try {
        const { title, description, price, category, color } = req.body;
        const imgFile = req.files?.img?.[0];

        if (!imgFile) {
            return res.status(400).json({
                success: false,
                message: "Image is required",
            });
        }

        const result = await cloudinary.uploader.upload(imgFile.path, {
            resource_type: "image",
        });

        const imageUrl = result.secure_url;

        const productData = {
            title, description, category, color,
            price: Number(price),
            img: imageUrl,
        }

        // console.log(title, description, price, category, color);
        // console.log(imageUrl)
        // console.log(productData)

        const product = new productModel(productData);
        await product.save();
        res.json({ success: true, message: "Product Added", product })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// list product 
export const ListProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// remove product 
export const RemoveProduct = async (req, res) => {
    try {
        const {id} = req.body;
        await productModel.findByIdAndDelete(id)
        res.json({ success: true, message: "Product Deleted" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// single product
export const SingleProduct = async (req, res) => {
    const id = req.body;
    const product = await productModel.findById({ id })
    res.json({ success: true, product })
}

// update product 