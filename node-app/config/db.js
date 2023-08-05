import mongoose from "mongoose";
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database connected.');
    } catch (err) {
        console.log(`${err} connection failed.`)
    }
}

export default connectDB;