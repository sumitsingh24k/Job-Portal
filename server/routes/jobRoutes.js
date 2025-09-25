import express from 'express'
import { getjobs, getJobByID } from "../controllers/jobController.js";

const router = express.Router()

// route to get all job data

router.get ('/',getjobs)


// route to get by jobid
router.get('/:id',getJobByID)



export default router;