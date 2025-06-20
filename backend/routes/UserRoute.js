import express from "express"//this route is only for backend
import { LoginUser, RegisterUser,LogoutUser } from "../controller/UserController.js"
const UserRoute = express.Router()
UserRoute.post("/", LoginUser)
UserRoute.post("/register", RegisterUser)
UserRoute.get("/Logout",LogoutUser);

export default UserRoute