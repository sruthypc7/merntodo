import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
const RegisterUser = async (req, res) => {
    try {
        let { name, email, password } = req.body
        let salt = await bcrypt.genSalt(10) //rancom values ne namukk kittiya password okke aayi mix chetyyan
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
    }
    catch (error) {
        res.status(500).json(error);

    }
}

const LoginUser = async (req, res) => {
    try {
        let { email, password } = req.body

        let user = await User.findOne({ emailid: email })
        if (user && await user.matchPassword(password)) {
            res.status(200).json(user)
        }
        else {
            res.status(500).json({ message: "incorrect email or password" })
        }
    }
    catch (error) {
        res.status(500).json(error)

    }
}


export { RegisterUser, LoginUser }