import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    }
})
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
};
const User = mongoose.model('Users', UserSchema)
export default User
