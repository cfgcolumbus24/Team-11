import React, { useState } from 'react';
import './input.css';

function LongInput({ onSubmit }) {
  const [lessonInfo, setLessonInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the entire lesson info; you can parse this as needed
    console.log("Lesson Info:", lessonInfo);
    
    // Assuming the input can be in the format "grade, subject, classSize, time"
    const [grade, subject, classSize, time] = lessonInfo.split(',').map(item => item.trim());
    
    // Call onSubmit with the parsed values
    onSubmit({ grade, subject, classSize, time });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md mt-10 flex-row">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Enter Lesson Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <label htmlFor="lessonInfo" className="block font-medium text-gray-700">Lesson Info</label>
          <input
            type="text"
            id="lessonInfo"
            value={lessonInfo}
            onChange={(e) => setLessonInfo(e.target.value)}
            className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter grade, subject, class size, time (e.g. 3, Math, 30, 55)"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LongInput;
