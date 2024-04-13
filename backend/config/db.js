import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //process.env.MONGO_URI
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message} `);
    process.exit();
  }
};

export default connectDB;
