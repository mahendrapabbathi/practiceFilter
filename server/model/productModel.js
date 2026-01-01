import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {type: String, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true, min: 0},
    img : {type: String, required: true},
    category : {type: String, required: true},
    color : {type: String, required: true},
}, { timestamps: true })

const productModel = mongoose.models.Product || mongoose.model('Product',productSchema);

export default productModel;