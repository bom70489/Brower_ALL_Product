import express from 'express'
import { removeProduct , getUsercart , addTocart } from '../Controller/cartController.js'
import authUser from '../middleware/userAuth.js'
const cartRouter = express.Router()

cartRouter.post('/add' , authUser , addTocart)
cartRouter.post('/remove' , authUser , removeProduct)
cartRouter.get('/get' , authUser , getUsercart)

export default cartRouter