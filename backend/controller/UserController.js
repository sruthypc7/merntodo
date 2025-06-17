import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
const RegisterUser = asyncHandler(async (req, res) => {
    
        let { name, email, password } = req.body
        let salt = await bcrypt.genSalt(10) //random values ne namukk kittiya password okke aayi mix chetyyan
        let encrtyptedPassword = await bcrypt.hash(password, salt);
        let ExistUser = await User.findOne({ emailid: email })
        if (ExistUser) {
            return res.status(404).json({ message: "user already exists" })
        }
        const user = await User.create({
            name,
            emailid: email,
            password: encrtyptedPassword,
        });
        res.status(201).json(user)
    })
    


const LoginUser =asyncHandler( async (req, res) => {
    
        let { email, password } = req.body

        let user = await User.findOne({ emailid: email })
        if (user && await user.matchPassword(password)) {
            res.status(200).json(user)
        }
        else {
            res.status(500).json({ message: "incorrect email or password" })
        }
    }
    
)


export { RegisterUser, LoginUser }