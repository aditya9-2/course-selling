import mongoose from "mongoose";


const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_CONNECT_URL);
        console.log(`Database connected`);

    } catch (err) {
        console.log("failed connecting DB", err);

    }
}

export default connectDB;