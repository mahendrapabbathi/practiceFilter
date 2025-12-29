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

        res.json({ success: true, message: "User Registered Successfully" })
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

        const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, { expiresIn: '7d' })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });


        res.json({ success: true, message:"Login successful" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export const logout = async (req, res) => {
    res.clearCookie('token',{
        httpOnly:true,
        sameSite:"strict",
        secure:true
    })
    res.json({success:true, message:"Logout successful"})
}