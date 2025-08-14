import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import moment from 'moment'
import Footer from '../components/Footer'
import { assets, jobsApplied } from '../assets/assets'

const Application = () => {
  const [isEdited, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)

  // Function to return badge colors based on status
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-blue-100 text-blue-700'
      case 'Rejected':
        return 'bg-red-100 text-red-700'
      case 'Accepted':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Resume Section */}
        <h2 className="text-lg font-semibold mb-4">Your Resume</h2>

        {isEdited ? (
          <div className="space-y-4">
            <label className="block">
              <p className="mb-2 text-gray-600">Select Resume</p>
              <div className="flex items-center gap-3">
                <input
                  onChange={e => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  className="block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <img src={assets.profile_upload_icon} alt="" className="w-8 h-8" />
              </div>
            </label>
            <button
              onClick={() => setIsEdit(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 mb-8">
            <a
              href=""
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 transition"
            >
              Resume
            </a>
            <button
              onClick={() => setIsEdit(true)}
              className="px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Edit
            </button>
          </div>
        )}

        {/* Jobs Applied Section */}
        <h2 className="text-lg font-semibold mb-4">Jobs Applied</h2>

        <div className="overflow-x-auto shadow rounded-lg">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Job Title</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobsApplied.map((job, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-center gap-2">
                    <img src={job.logo} alt="" className="w-6 h-6" />
                    {job.company}
                  </td>
                  <td className="px-6 py-4">{job.title}</td>
                  <td className="px-6 py-4">{job.location}</td>
                  <td className="px-6 py-4">{moment(job.date).format('MMM DD, YYYY')}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusClasses(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Application
