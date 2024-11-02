import React, { useState } from 'react';
import './input.css';

function LessonInput() {
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [classSize, setClassSize] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Info:", { grade, subject, classSize, time });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md mt-10 flex-row">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Enter Lesson Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Grade Input */}
        <div className="flex space-x-4">
          <label htmlFor="grade" className="block font-medium text-gray-700 w-24">Grade</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter grade"
            required
          />
        </div>
        
        {/* Subject Input */}
        <div className = "flex space-x-4">
          <label htmlFor="subject" className="block font-medium text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter subject"
            required
          />
        </div>
        
        {/* Class Size Input */}
        <div className="flex space-x-4">
          <label htmlFor="classSize" className="block font-medium text-gray-700">Class Size</label>
          <input
            type="number"
            id="classSize"
            value={classSize}
            onChange={(e) => setClassSize(e.target.value)}
            className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter class size"
            required
          />
        </div>
        
        {/* Time Input */}
        <div className="flex space-x-4">
          <label htmlFor="time" className="block font-medium text-gray-700">Time</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter time (min)"
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

export default LessonInput;
