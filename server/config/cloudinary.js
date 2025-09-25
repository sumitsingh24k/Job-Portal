import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  if (process.env.CLOUDINARY_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_SECRET_KEY) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
    console.log("Cloudinary connected ✅");
  } else {
    console.log("Cloudinary not configured; proceeding without uploads");
  }
};

export default connectCloudinary;
