import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const Viewapplication = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Applications</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">User Name</th>
              <th className="border px-4 py-2">Job Title</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Resume</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2 flex items-center gap-2">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="border px-4 py-2">{applicant.jobTitle}</td>
                <td className="border px-4 py-2">{applicant.location}</td>
                <td className="border px-4 py-2">
                  <a
                    href={applicant.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 text-blue-600 hover:underline"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="download resume"
                      className="w-4 h-4"
                    />
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                      Accept
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewapplication;
