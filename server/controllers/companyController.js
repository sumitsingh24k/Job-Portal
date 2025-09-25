import Company from "../models/company.js";
import Job from "../models/Job.js";
import JobApplication from "../models/JobApplication.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Missing details" });
  }

  try {
    const companyExist = await Company.findOne({ email });
    if (companyExist) {
      return res.json({ success: false, message: "Company already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    let imageUrl = '';
    if (imageFile && cloudinary.config().cloud_name) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path);
      imageUrl = imageUpload.secure_url;
    }

    const company = await Company.create({ 
      name,
      email,
      password: hashPassword,
      image: imageUrl,
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
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.json({ success: false, message: 'Missing credentials' });

    const company = await Company.findOne({ email });
    if (!company) return res.json({ success: false, message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) return res.json({ success: false, message: 'Invalid email or password' });

    return res.json({ success: true, token: generateToken(company._id) });
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
}



// get company data
export const getCompanyData = async (req, res) => {
  try {
    const company = req.Company;
    if (!company) return res.status(401).json({ success: false, message: 'Unauthorized' });
    res.json({ success: true, company });
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
}
// post a new job 
export const postJob = async (req, res) => {
  try {
    const company = req.Company;
    const { name, description, location, category, level, salary } = req.body;
    if (!company) return res.status(401).json({ success: false, message: 'Unauthorized' });
    if (!name || !description || !location || !category || !level || !salary) {
      return res.json({ success: false, message: 'Missing job fields' });
    }
    const job = await Job.create({
      name,
      description,
      location,
      category,
      level,
      salary,
      date: Date.now(),
      companyId: company._id,
    });
    res.json({ success: true, job });
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
}
// get company job applicants
export const getCompanyJobApplicants = async (req, res) => {
  try {
    const company = req.Company;
    if (!company) return res.status(401).json({ success: false, message: 'Unauthorized' });
    const applicants = await JobApplication.find({ companyId: company._id })
      .populate('userId', 'name email image')
      .populate('jobId', 'name');
    res.json({ success: true, applicants });
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
}
// get compamy posted jobs
export const getCompanyPostedJobs = async (req, res) => {
  try {
    const company = req.Company;
    if (!company) return res.status(401).json({ success: false, message: 'Unauthorized' });
    const jobs = await Job.find({ companyId: company._id });
    res.json({ success: true, jobs });
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
}
//get company Applicants status
export const changeJobApplicationsStatus = async (req, res) => {
  try {
    const company = req.Company;
    const { applicationId, status } = req.body;
    if (!company) return res.status(401).json({ success: false, message: 'Unauthorized' });
    const allowed = ['pending', 'accepted', 'rejected'];
    if (!allowed.includes(status)) return res.json({ success: false, message: 'Invalid status' });
    await JobApplication.findOneAndUpdate({ _id: applicationId, companyId: company._id }, { status });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
}

// change job visibllity
export const changeVisibility = async (req, res) => {
  try {
    const company = req.Company;
    const { jobId, visible } = req.body;
    if (!company) return res.status(401).json({ success: false, message: 'Unauthorized' });
    await Job.findOneAndUpdate({ _id: jobId, companyId: company._id }, { visible });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: 'Error: ' + error.message });
  }
}