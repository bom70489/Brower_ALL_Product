import express from 'express'
import { Register , loginUser , adminLogin} from '../Controller/userComtroller.js'

const userRouter = express.Router()

userRouter.post('/register' , Register)
userRouter.post('/login' , loginUser)
userRouter.post('/admin' , adminLogin)

export default userRouter