import express from "express"
import { authUser,getUserProfile,registerUser ,UpDateUserProfile} from "../controller/userController.js"
import { protect } from "../middleware/authmiddlerware.js"

const router = express.Router()
router.post("/login",authUser)
router.post('/',registerUser)
router.get("/profile",protect ,getUserProfile)
router.put("/profile",protect ,UpDateUserProfile)




export default router
