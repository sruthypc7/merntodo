import express from "express"
import { LoginUser, RegisterUser } from "../controller/UserController.js"
const UserRoute = express.Router()
UserRoute.post("/", LoginUser)
UserRoute.post("/register", RegisterUser)

export default UserRoute