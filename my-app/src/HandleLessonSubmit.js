import React, { useState } from 'react';
import LessonInput from './LessonInput';
import LLMPage from './LLMPage';

const HandleLessonSubmit = () => {
  const [lessonData, setLessonData] = useState(null);

  const handleLessonSubmitFunction = (data) => {
    // Format the data as a prompt string
    const prompt = `Create a lesson plan for: Grade: ${data.grade} Subject: ${data.subject} Class Size: ${data.classSize} Time: ${data.time} minutes for classes who are less fortunate and do not have a standardized school system.`;

    setLessonData(prompt); // Set formatted prompt for LLMPage
  };


  return (
    <div>
      <LessonInput handleLessonSubmitFunction={handleLessonSubmitFunction} />
      {lessonData && <LLMPage lessonData={lessonData} />}
    </div>
  );
};

export default HandleLessonSubmit;
