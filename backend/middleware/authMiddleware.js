import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
const protect = async (req, res, next) => {
    let token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: "not authorised,no token" })
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");
console.log(user)
        if (!user) {
            return res.status(401).json({ message: "user not found" });
        }
        req.user = user
        next();

    }
    catch (error) {
        return res.status(401).json({ message: "not authorized,token failed" })
    }


};
export { protect };