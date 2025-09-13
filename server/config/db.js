import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("DATABASE CONNECTED")
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/job_portal`);

  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
