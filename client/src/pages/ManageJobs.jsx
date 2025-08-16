import React from "react";
import moment from "moment";
import { assets, manageJobsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const navigate=useNavigate()
  return (
    <div className="p-6">
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Job Title</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Applicants</th>
              <th className="px-6 py-3">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3 font-medium text-gray-900">
                  {job.title}
                </td>
                <td className="px-6 py-3">
                  {moment(job.date).format("ll")}
                </td>
                <td className="px-6 py-3">{job.location}</td>
                <td className="px-6 py-3">{job.applicants}</td>
                <td className="px-6 py-3">
                  <input
                    type="checkbox"
                    defaultChecked={job.visible}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={()=>navigate('/dashboard/add-job')} className="bg-black text-white py-2 px-4 rounded"> Add new job</button>
      </div>
    </div>
  );
};

export default ManageJobs;
