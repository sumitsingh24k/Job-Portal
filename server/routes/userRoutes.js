import express from 'express';
import upload from "../config/multer.js";
import { getUserData, getUserJobApplications, updateUserResume, applyForJob } from '../controllers/userController.js';

const router=express.Router()

// get user data
router.get('/user',getUserData)

//get application data
router.get('/application',getUserJobApplications)
//update resume
router.post('/update-resume', upload.single('resume'), updateUserResume)

//apply for job
router.post('/apply',applyForJob)

export default router;