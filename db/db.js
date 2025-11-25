import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   // Load .env file

const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
  }
};

export default db;