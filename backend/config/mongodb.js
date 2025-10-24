import mongoose from "mongoose";

const connectDb = async () => {

    mongoose.connection.on('connected' , () => {
        console.log("CB Connect");
    })

    await mongoose.connect(`${process.env.MONGODB}/e-commerce`)

}

export default connectDb