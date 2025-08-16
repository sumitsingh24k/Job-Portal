import React, { useEffect, useRef, useState } from 'react' 
import Quill from 'quill'
import { JobCategories, JobLocations } from '../assets/assets'

const Addjobs = () => {

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('Bangalore')
  const [category, setCategory] = useState('programing')
  const [level, setLevel] = useState('Beginer Level')
  const [salary, setSalary] = useState(0)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow'
      })
    }
  }, [])

  return (
    <div className="w-full p-6">
      <form action="" className="space-y-6">
        
        {/* Job Title */}
        <div>
          <p className="mb-2 text-gray-700 font-medium">Job Title</p>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            type="text"
            placeholder="Type here"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Job Description */}
        <div>
          <p className="mb-2 text-gray-700 font-medium">Job Description</p>
          <div
            ref={editorRef}
            className="min-h-[150px] border border-gray-300 rounded-md"
          ></div>
        </div>

        {/* Category, Location, Level */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="mb-2 text-gray-700 font-medium">Job Category</p>
            <select
              onChange={e => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            >
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-2 text-gray-700 font-medium">Job Location</p>
            <select
              onChange={e => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            >
              {JobLocations.map((loc, index) => (
                <option key={index} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-2 text-gray-700 font-medium">Job Level</p>
            <select
              onChange={e => setLevel(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            >
              <option value="Beginer Level">Beginer Level</option>
              <option value="Intermediate Level">Intermediate Level</option>
              <option value="senior level">Senior Level</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div>
          <p className="mb-2 text-gray-700 font-medium">Job Salary</p>
          <input
            onChange={e => setSalary(e.target.value)}
            type="number"
            placeholder="2500"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition font-medium"
        >
          ADD
        </button>
      </form>
    </div>
  )
}

export default Addjobs
