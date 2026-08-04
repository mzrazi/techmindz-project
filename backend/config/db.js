import mongoose from "mongoose";


const dbConnect=async ()=>{
   try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log("mongoDB connected successfully");
   }catch (error) {
        console.log("Error in DB connection", error);   
        process.exit(1);
   }

}


export default dbConnect;

