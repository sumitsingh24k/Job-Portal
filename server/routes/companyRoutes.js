import express from 'express'
import upload from "../config/multer.js";
import { 
  changeJobApplicationsStatus, 
  changeVisibility,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  logincompany,
  postJob,
  registerCompany 
} from '../controllers/companyController.js'
import protectCompany from "../middlewear/AuthMiddlewear.js";

const router = express.Router()

// Register a company
router.post('/register', upload.single('image'), registerCompany)


// Company login
router.post('/login', logincompany)

// Get company data
router.get('/company',protectCompany, getCompanyData)

// Post a new job
router.post('/post-job',protectCompany, postJob)

// Get applicant data 
router.get('/applicants',protectCompany, getCompanyJobApplicants)

// List jobs
router.get('/list-jobs', protectCompany,getCompanyPostedJobs)

// Change application status
router.post('/change-status', protectCompany,changeJobApplicationsStatus)

// Change application visibility
router.post('/change-visiblity',protectCompany, changeVisibility)
router.post('/change-visibility',protectCompany, changeVisibility)

export default router