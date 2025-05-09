import mongoose from "mongoose";
const connectDb= async()=>{
    try{
        let connect=await mongoose.connect("mongodb+srv://sruthypc7:Sruthy*123@cluster0.l8noef0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('mongodb connected succesfully');
    }
    catch(error)
    {
    console.log(error)
    }
}
export default connectDb