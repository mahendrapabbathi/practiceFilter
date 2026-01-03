import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

export const userAuth = async (req, res, next) => {
  const token = req.headers.token; // correct way to read header

  if (!token) {
    return res.json({ success: false, message: "Not Authorized, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

    req.userId = decoded.id; // ✅ set userId here
     console.log("userAuth decoded id:", req.userId);
    next();
  } catch (error) {
    console.log("Auth error:", error.message);
    res.json({ success: false, message: "Not Authorized, token invalid" });
  }
};
