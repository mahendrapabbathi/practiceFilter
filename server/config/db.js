import mongoose from "mongoose";

const connectDB = async () =>{
    await mongoose.connect(`${process.env.MONGODB_URI}/practiceFilter`)
    console.log("Database Connected")
    console.log("DB NAME 👉", mongoose.connection.name);
}

export default connectDB;