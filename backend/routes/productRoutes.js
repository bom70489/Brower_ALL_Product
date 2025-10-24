import express from 'express'
import upload from '../middleware/multer.js'
import { listProduct , addProduct , removeProduct , getProductId } from '../Controller/productController.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()

productRouter.post('/add', adminAuth , upload.fields([
    {name : "image" , maxCount : 1}
]) , addProduct)
productRouter.post('/remove' , adminAuth , removeProduct)
productRouter.get('/list' , listProduct)
productRouter.get('/:id' , getProductId)

export default productRouter