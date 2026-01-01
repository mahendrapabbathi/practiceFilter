import mongoose from "mongoose";

const connectDB = async () =>{
    await mongoose.connect(`${process.env.MONGODB_URI}/practiceFilter`)
    console.log("Database Connected")
}

export default connectDB;