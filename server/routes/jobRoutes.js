import express from 'express'
import { getJobByID, getjobs } from '../controllers/jobController';

const router = express.Router()

// route to get all job data

router.get ('/',getjobs)


// route to get by jobid
router.get('/:id',getJobByID)



export default router;