import mongoose from "mongoose";

export const connectDB = async () => {
    const url = process.env.MONGO_URL ;

    if(!url) {
        throw new Error("MONGO_URL is not defined in environment variables");
    }

    try {

        await mongoose.connect(url,{
            dbName:"ChatAppmicroserviceapp"
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
        
    }
}

export default connectDB;




