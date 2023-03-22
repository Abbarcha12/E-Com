import express from "express"
import products from "./Data/products.js"
import dotenv from "dotenv"



const app =express()
dotenv.config()
app.get("/", (req,res)=>{
res.send("API is running ")
})

app.get("/api/products",(req,res)=>{

    res.send(products)
})
app.get("/api/products/:id",(req,res)=>{
  const product = products.find((p)=> p._id === req.params.id)
    res.send(product)
})
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running  on port ${PORT}`))