import express from "express"
import productRouter from "./routes/productRoutes.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
import orderRouter from "./routes/orderRoutes.js"

const app =express()
dotenv.config()
connectDB()
app.use(express.json())


app.use("/api/products",productRouter)
app.use("/api/users",userRouter)
app.use("/api/orders",orderRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running  on port ${PORT}`))