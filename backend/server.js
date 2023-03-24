import express from "express"
import producRouter from "./routes/productRoutes.js"
import dotenv from "dotenv"

import connectDB from "./config/db.js"

const app =express()
dotenv.config()
connectDB()


app.get("/", (req,res)=>{
res.send("API is running ")
})

app.use("/api/products",producRouter)
// app.get("/api/products/:id",(req,res)=>{
//   const product = products.find((p)=> p._id === req.params.id)
//     res.send(product)
// })
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running  on port ${PORT}`))