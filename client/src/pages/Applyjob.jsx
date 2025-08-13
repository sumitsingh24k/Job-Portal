import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';
import Loading from '../components/Loading';
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import moment from 'moment';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';

const Applyjob = () => {
  const { id } = useParams();
  const [jobdata, setJobdata] = useState(null);
  const { jobs } = useContext(AppContext);

  useEffect(() => {
    if (jobs.length > 0) {
      const data = jobs.filter(job => String(job._id) === String(id));
      if (data.length > 0) {
        setJobdata(data[0]);
      }
    }
  }, [id, jobs]);

  return jobdata ? (
    <>
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          <button
            onClick={() => window.history.back()}
            className="text-sm text-blue-600 hover:underline flex items-center gap-2"
          >
            ← Back to Jobs
          </button>

          {/* Job Card */}
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center gap-4">
              <img
                src={assets.company_icon}
                alt="Company"
                className="w-14 h-14 rounded object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">{jobdata.title}</h1>
                <p className="text-gray-600">{jobdata.companyId?.name}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 text-gray-700">
              <span className="flex items-center gap-1">
                <img src={assets.location_icon} className="w-4" alt="" /> {jobdata.location}
              </span>
              <span className="flex items-center gap-1">
                <img src={assets.person_icon} className="w-4" alt="" /> {jobdata.level}
              </span>
              <span className="flex items-center gap-1">
                <img src={assets.money_icon} className="w-4" alt="" /> CTC: {jobdata.salary}
              </span>
              <span className="flex items-center gap-1">
                📅 {moment(jobdata.date).fromNow()}
              </span>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                {jobdata.type || 'Full-time'}
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                {jobdata.category || 'General'}
              </span>
            </div>
          </div>

          {/* Job Description */}
          <div className="border border-gray-300 rounded-lg p-6 space-y-4">
            <h2 className="font-bold text-lg">Job Description</h2>
            <p>
              Join our technology team as a Cloud Engineer, where you will be responsible for designing and managing
              our cloud infrastructure. You will collaborate with development and operations teams to ensure the efficient
              deployment and scaling of applications.
            </p>

            <div className="space-y-2">
              <h3 className="font-bold">Key Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Design and implement cloud solutions using AWS, Azure, or Google Cloud Platform.</li>
                <li>Monitor and optimize cloud resources for performance and cost efficiency.</li>
                <li>Work with DevOps teams to automate deployment processes.</li>
                <li>Ensure cloud security and compliance with industry standards.</li>
                <li>Provide technical support and troubleshooting for cloud-based applications.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold">Skills Required</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Experience with cloud platforms and services.</li>
                <li>Proficiency in scripting languages such as Python or Bash.</li>
                <li>Strong understanding of networking concepts and security.</li>
                <li>Experience with container orchestration tools like Kubernetes.</li>
                <li>Good problem-solving skills and attention to detail.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-lg font-bold mb-4">Apply for this job</h2>
            <textarea
              placeholder="Cover Letter (Optional)"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              ✈ Apply Now
            </button>
            <p className="text-sm text-gray-500 mt-2">
              You need to sign in to apply for jobs
            </p>
            <div className="flex gap-2 mt-3">
              <button className="w-1/2 border rounded-lg py-2 hover:bg-gray-100">
                Sign In
              </button>
              <button className="w-1/2 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border">
            <h2 className="text-lg font-bold mb-3">Similar Jobs</h2>
            {jobs
              .filter(
                job =>
                  job._id !== jobdata._id &&
                  job.companyId?._id === jobdata.companyId?._id
              )
              .slice(0, 3)
              .map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            <button className="mt-3 w-full border rounded-lg py-2 hover:bg-gray-100">
              View More {jobdata.category} Jobs
            </button>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH FOOTER */}
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Applyjob;
