import LessonInput from './LessonInput';
import LLMPage from './LLMPage';
import React, {useState} from 'react';
import axios from 'axios';
import OpenAI from 'openai';

// Access the API key
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const VanillaHandleLesson = () => {
  const handleLessonSubmit = (event) => {
    event.preventDefault();
    // Format the data as a prompt string
    const prompt = `Create a lesson plan for:
      - Grade: ${event.target[0].value}
      - Subject: ${event.target[1].value}
      - Class Size: ${event.target[2].value}
      - Time: ${event.target[3].value} minutes`;

    //setLessonData(prompt); // Set formatted prompt for LLMPage
    handleGenerate(prompt)
  };

  const handleGenerate = async (prompt) => {
    const openai = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});

    try {
      const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
              {
                  role: "user",
                  content: prompt,
              },
          ],
      });

      console.log(completion.choices[0].message.content || 'No response available.')
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <div>
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md mt-10 flex-row">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Enter Lesson Information</h2>
      <form id='form' onSubmit={handleLessonSubmit} className="space-y-4">
        {/* Grade Input */}
        <div className="flex space-x-4">
          <label htmlFor="grade" className="block font-medium text-gray-700 w-24">Grade</label>
          <input
            type="text"
            id="grade"
            // value={grade}
            // onChange={(e) => setGrade(e.target.value)}
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
            // value={subject}
            // onChange={(e) => setSubject(e.target.value)}
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
            // value={classSize}
            // onChange={(e) => setClassSize(e.target.value)}
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
            // value={time}
            // onChange={(e) => setTime(e.target.value)}
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
    </div>
  );
};

export default VanillaHandleLesson;