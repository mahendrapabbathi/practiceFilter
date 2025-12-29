import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js"

const userAuth = async (req, res, next) => {
    try {
        
        const token = req.cookies.token
        if (!token) {
            return res.json({
                success: false, message: "Not authorized, token missing"
            });
        }
    
        const decode_token = jwt.verify(token,process.env.SECRET_TOKEN)
    
        const user = await userModel.findById(decode_token.id).select("-password")
    
        if(!user){
            return res.json({success:false, message:"User not found"})
        }
    
        req.user = user;
        next()

    } catch (error) {
        return res.json({success: false,message: "Not authorized, token invalid"
        });
    }
}