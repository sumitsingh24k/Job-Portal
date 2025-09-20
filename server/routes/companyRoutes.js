import express from 'express'
import upload from "../config/multer.js";

import { 
  changeJobApplicationsStatus, 
  changeVisiblity, 
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  logincompany,
  postJob,
  registerCompany 
} from '../controllers/companyController.js'

const router = express.Router()

// Register a company
router.post('/register', upload.single('image'), registerCompany)


// Company login
router.post('/login', logincompany)

// Get company data
router.get('/company', getCompanyData)

// Post a new job
router.post('/post-job', postJob)

// Get applicant data 
router.get('/applicants', getCompanyJobApplicants)

// List jobs
router.get('/list-jobs', getCompanyPostedJobs)

// Change application status
router.post('/change-status', changeJobApplicationsStatus)

// Change application visibility
router.post('/change-visiblity', changeVisiblity)

export default router