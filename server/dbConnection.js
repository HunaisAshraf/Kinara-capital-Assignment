import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://user:user123@cluster0.g96oqsi.mongodb.net/students"
    );
    console.log("Connected to mongoDb database");
  } catch (error) {
    console.log("error in mongoDB " + error);
  }
};

export default connectDb;
