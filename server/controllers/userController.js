import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {

    try {
        const { username, email, password } = req.body;
        const exists = await userModel.findOne({ email })

        if (exists) {
            return res.json({ success: false, message: "User Already Exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            username, email, password: hashedPassword
        })

        await newUser.save()
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_TOKEN, { expiresIn: '7d' })

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }

        const isMatches = await bcrypt.compare(password, user.password)
        if (!isMatches) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, { expiresIn: '1d' })

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export const logout = async (req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully"
  });
};

// admin login 

export const adminLogin = (req,res) => {
    try {
        const {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.SECRET_TOKEN)
            res.json({success:true, token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}