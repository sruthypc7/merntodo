import express from 'express'
import connectDb from './config/db.js'
import todoRoute from './routes/todoRoutes.js'
import cors from "cors";
import UserRoute from './routes/UserRoute.js';
import { ErrorHandler,notfound } from './middleware/errorMiddleware.js'; 
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

dotenv.config()

const app = express()
connectDb()
let port = process.env.PORT;

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/api/todo', todoRoute)
app.use('/api/user',UserRoute)

app.use(notfound)//error handling middleware must be in last line because after checking todoroute and userRoute then use error handling middleware
app.use(ErrorHandler)
app.listen(port, () => console.log('server connected'))
 