import Job from '../models/Job.js';

// Get all jobs
export const getjobs = async (req, res) => {
    try {
        const jobs = await Job.find({ visible: true })
            .populate({ path: 'companyId', select: '-password' });
        
        res.status(200).json({
            success: true,
            jobs
        });

    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get job by ID
export const getJobByID = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id)
            .populate({ path: 'companyId', select: '-password' });

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found'
            });
        }

        res.status(200).json({
            success: true,
            job
        });

    } catch (error) {
        console.error('Error fetching job by ID:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
