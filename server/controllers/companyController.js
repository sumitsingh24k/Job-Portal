import Company from "../models/company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({ success: false, message: "Missing details" });
  }

  try {
    const companyExist = await Company.findOne({ email });
    if (companyExist) {
      return res.json({ success: false, message: "Company already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Convert buffer to base64 for cloudinary upload
    const imageUpload = await cloudinary.uploader.upload(
      `data:${imageFile.mimetype};base64,${imageFile.buffer.toString('base64')}`
    );
    
    const company = await Company.create({ 
      name,
      email,
      password: hashPassword,
      image: imageUpload.secure_url,
    });

    res.json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error: " + error.message });
  }
};

// company login
export const logincompany = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const company = await Company.findOne({ email });
    
    if (company && await bcrypt.compare(password, company.password)) {
      res.json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.image
        },
        token: generateToken(company._id)
      });
    } else {
      res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    res.json({ success: false, message: "Error: " + error.message });
  }
};




// get company data
export const getCompanyData=async(req,res)=>{
  
}
// post a new job 
export const postJob=async(req,res)=>{
  const {title,description,location,salary}=req.body;

}
// get company job applicants
export const getCompanyJobApplicants=async(req,res)=>{

}
// get compamy posted jobs
export const getCompanyPostedJobs=async(req,res)=>{

}
//get company Applicants status
export const changeJobApplicationsStatus=async(req,res)=>{

}

// change job visibllity
export const changeVisiblity =async(req,res)=>{

}
