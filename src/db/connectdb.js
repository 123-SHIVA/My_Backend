import mongoose from "mongoose";
import {DB_NAME} from "../constrant.js";


const connectDB =async()=>{
    try {

    const connectionInstance  =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)

        
    } catch (error) {
        console.log("databae connectioned error:",error);
        process.exit(1)
    }
}

export default connectDB;