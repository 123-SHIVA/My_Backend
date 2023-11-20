import dotenv from "dotenv"
import connectDB from "./db/connectdb.js";
import {app} from "./App.js"

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed !!!",error);
});



// import express from 'express';
// const app=express()
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log('Error:',error)
//             throw error;
//         })

//         app.listetn(process.env.PORT,()=>{
//             console.log(`app is listening port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.log('ERROR:',error)
//         throw error;
        
//     }
// })()