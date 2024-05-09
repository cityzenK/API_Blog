const mongoose = require('mongoose');
require('dotenv').config()

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


dbConnect(); 
