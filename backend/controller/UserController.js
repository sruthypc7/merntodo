import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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



const LoginUser = asyncHandler(async (req, res) => {

    let { email, password } = req.body;

    let user = await User.findOne({ emailid: email });
    if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            _id: user._id,
            email: user.email,
            name: user.name,
        });
    }
    else {
        res.status(500).json({ message: "incorrect email or password" })
    }
}

)

const LogoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: "logout success" })
})

export { RegisterUser, LoginUser, LogoutUser };