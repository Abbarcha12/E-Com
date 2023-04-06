import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utlils/generateTokens.js"

// get user and get token
// post/api/users/login
//  access Public


const authUser =asyncHandler(async (req,res)=>{
    const {email,password} =req.body
    const user = await User.findOne({email})
    if (user && (await user.matchPassword(password)))
    res.send({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id)
    
    })
    else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
})


// registerUser
// post/api/users
//  access Public


const registerUser =asyncHandler(async (req,res)=>{
    const {name,email,password} =req.body
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("User Already Exist")
    }
    const user  =await User.create({
        name,
        email,
        password
    })
  
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else {
res.status(400)
throw new Error('Invalid user data')
    }
})

// Get user profile
// get /api/users/profile
// access Private

const getUserProfile= asyncHandler(async (req,res)=>{
   const user = await User.findById(req.user._id)
    if(user) {
     return res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
     })
    }else{
        res.status(404)
        throw new Error("User Not Found")
    }

})

// Get user profile
// PUT /api/users/profile
// access Private
const UpDateUserProfile= asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id)
     if(user) {
     user.name= req.body.name || user.name
     user.email= req.body.email || user.email
     if(req.body.password){
    user.password =req.body.password || user.password
     }
     const updatedUser =await user.save()
     res.send({
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        isAdmin:updatedUser.isAdmin,
        token:generateToken(user._id)
    
    })

     }else{
         res.status(404)
         throw new Error("User Not Found")
     }
 
 })
export {
    authUser,
    getUserProfile,
    registerUser,
    UpDateUserProfile
}