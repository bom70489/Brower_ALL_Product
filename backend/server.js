import express from 'express'
import cors from 'cors'
import connectDb from './config/mongodb.js'
import 'dotenv/config'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import cartRouter from './routes/cartRotes.js'


const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()

app.use(express.json())
app.use(cors())

// api
app.use('/api/user' , userRouter)
app.use('/api/product' , productRouter)
app.use('/api/cart' , cartRouter)


app.get('/' , (req , res) => {
    res.send("API WORKING")
})

app.listen(port , () => {
    console.log("Server start on port : " , port);
})