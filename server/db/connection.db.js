import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
    const url = process.env.MONGO_URI;
    try {
        const mongoConnection = await mongoose.connect(url)
        console.log(`MongoDB Connected: ${mongoConnection.connection.host}`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;