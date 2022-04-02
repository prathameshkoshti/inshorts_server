import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  try {
    const URL = process.env.MONGODB_URL;
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Error while connection to database", error);
  }
};

export default Connection;
