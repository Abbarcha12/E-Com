import User from "../models/userModel.js";
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
const protect = asyncHandler( async (req,res,next)=>{
    let token
    if(req.headers.token && req.headers.token.startsWith("Bearer")){
       try {
        token =req.headers.token.split(' ')[1]
        const decoded = jwt.verify(token,process.env.JWT_TOKEN)
         req.user = await User.findById(decoded.id).select('-password')
 
        next()
       } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Not authorized, token failed')
       }
    }
     
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token') 
    }
    
}
)
export {
    protect
}