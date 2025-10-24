import userModel from '../model/userModel.js'

const addTocart = async (req , res) => {
    try {
        const userId = req.user
        const { ItemId } = req.body
        const userData = await userModel.findById(userId)
        
        userData.cartData.push(ItemId)
        await userData.save()

        return res.json({ success : true , message : "Add to cart" , cartData : userData.cartData})

    } catch (error) {
        console.log(error);
        res.json({success : false , message : error.message})
    }
}

const removeProduct = async (req , res) => {
    try {
        const userId = req.user
        const { ItemId } = req.body

        const userData = await userModel.findById(userId)
        const index = userData.cartData.findIndex(item => item.toString() === ItemId)
        if(index > -1) {
            userData.cartData.splice(index , 1)
        }

        await userData.save()

        res.json({success : true , message : "Item removed from cart" , cartData : userData.cartData})

    } catch (error) {
        console.log(error);
        res.json({ success : false , message : error.message})
    }
}

const getUsercart = async (req , res) => {
    try {
        
        const userId = req.user
        const userData = await userModel.findById(userId).populate('cartData')
        let cartData = userData.cartData;

        res.json({success : true , cartData})

    } catch (error) {
        console.log(error);
        res.json({success : false , message : error.message})
    }
}

export { getUsercart , addTocart , removeProduct}