import User from "../models/User.js"
import Job from "../models/Job.js"
import jobApplication from "../models/JobApplication.js"
import {v2 as cloudinary} from  'cloudinary'
//user data
export const getUserData=async(req,res)=>{
    
    try {
    const userId = (req.auth && req.auth.userId) || req.headers['x-user-id'];
    if (!userId) {
      return res.json({ success: false, message: "Missing user id" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: "Error: " + error.message });
  }

}



// applyfor job
export const applyForJob=async(req,res)=>{
  const {jobId}=req.body
  const userId = (req.auth && req.auth.userId) || req.headers['x-user-id']
  try{
    if (!userId) return res.json({success:false,message:'Missing user id'})
    if (!jobId) return res.json({success:false,message:'Missing job id'})
    const isAlreadyApplied=await jobApplication.find({jobId,userId})
    if (isAlreadyApplied.length>0){
      return res.json({success:false,message:'already applied'})
    }
    const jobData=await Job.findById(jobId)
    if (!jobData){
      return res.json({success:false,message:'job not found'})
    }
    await jobApplication.create({
      companyId:jobData.companyId,
      userId,
      jobId,
      date: Date.now()
    })
    res.json({success:true,message:'applied successfully'})
  }catch(error){
    res.json({ success: false, message: "Error: " + error.message });
  }

}

//get user applied applications

export const getUserJobApplications=async(req,res)=>{
  try{
    const userId = (req.auth && req.auth.userId) || req.headers['x-user-id']
    if (!userId) return res.json({success:false,message:'Missing user id'})
    const applications=await jobApplication.find({userId})
    .populate('companyId','name email image')
    .populate('jobId','name description location category level salary').exec()
    if (!applications){
      return res.json ({success:false,message:'No job application'})
    }
    return res.json ({success:true ,applications})
  }catch(error){
    res.json({ success: false, message: "Error: " + error.message });
  }
}

// update user profile 
export const updateUserResume = async (req, res) => {
  try {
    const userId = (req.auth && req.auth.userId) || req.headers['x-user-id'];
    if (!userId) return res.status(400).json({ success: false, message: "Missing user id" });
    const resumeFile = req.file; // provided by multer

    const userData = await User.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (resumeFile) {
      const resumeUpload = await cloudinary.uploader.upload(resumeFile.path);
      userData.resume = resumeUpload.secure_url;
    } else {
      return res.status(400).json({ success: false, message: "No resume file provided" });
    }

    await userData.save();
    return res.json({ success: true, message: "Resume uploaded", resume: userData.resume });
    
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error: " + error.message });
  }
};
