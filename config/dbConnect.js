import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGODB_DB,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("DB connect suscessful")
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}


export default dbConnect(); 
