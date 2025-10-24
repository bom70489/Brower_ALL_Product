import { v2 as cloudinary } from 'cloudinary'
import productModel from '../model/productModel.js'

const addProduct = async (req , res) => {
    try {
        const { name , description , price} = req.body

        const image = req.files.image && req.files.image[0]

        if (!image) {
            return res.json({ success: false, message: "No image uploaded" });
        }

        const result = await cloudinary.uploader.upload(image.path , {
            resource_type: 'image'
        })

        const productData = {
            name , 
            description , 
            price : Number(price),
            image : result.secure_url
        }

        const product = new productModel(productData)
        await product.save()

        res.json({success : true , message : "Product Added" , product })
    } catch (error) {
        console.log(error);
        res.json({ success : false , message : error.message })
    }
}

const listProduct = async (req , res) => {
    try {
        const products = await productModel.find({})
        res.json({success : true , products})
    } catch (error) {
        console.log(error);
        res.json({success : false , message : error.message})
    }
} 

const removeProduct = async (req , res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Product Removed"})
    } catch(error) {
        console.log(error);
        res.json({success: false , message: error.message})
    }
}

const getProductId = async (req , res) => {
    try {
        
        const { id } = req.params;
        const product = await productModel.findById(id)

        if(!product) {
            return res.json({ success : false , message : "Product Not found"})
        }

        return res.json({success : true , product})

    } catch (error) {   
        console.log(error);
        res.json({ success : false , message : error.message})
    }
}

export { addProduct , listProduct , removeProduct , getProductId}