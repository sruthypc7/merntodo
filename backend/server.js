import express from 'express'
import connectDb from './config/db.js'
import Todos from './models/todoModel.js'
import todoRoute from './routes/todoRoutes.js'
const app = express()
connectDb()
let port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/todo', todoRoute)


app.listen(port, () => console.log('server connected'))
