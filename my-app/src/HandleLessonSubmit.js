import React, { useState } from 'react';
import LessonInput from './LessonInput';
import LLMPage from './LLMPage';

const HandleLessonSubmit = () => {
  const [lessonData, setLessonData] = useState(null);

  const handleLessonSubmit = (data) => {
    // Format the data as a prompt string
    const prompt = `Create a lesson plan for:
      - Grade: ${data.grade}
      - Subject: ${data.subject}
      - Class Size: ${data.classSize}
      - Time: ${data.time} minutes`;

    setLessonData(prompt); // Set formatted prompt for LLMPage
  };

  return (
    <div>
      <LessonInput onSubmit={handleLessonSubmit} />
      {lessonData && <LLMPage initialPrompt={lessonData} />}
    </div>
  );
};

export default HandleLessonSubmit;
