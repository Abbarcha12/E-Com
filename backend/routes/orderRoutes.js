import express from "express"
import {addOrderItems,getOrderById} from "../controller/orderControlller.js"
import { protect } from "../middleware/authmiddlerware.js"

const router = express.Router()
router.route("/").post(protect,addOrderItems)
router.route("/:id").get(protect,getOrderById)

export default router
