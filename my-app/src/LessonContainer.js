import React, { useState } from 'react';
import LessonInput from './LessonInput'; // Import the LessonInput component
import LessonOutput from './LessonOutput'; // Import the component to display results

const LessonContainer = () => {
  const [lessonData, setLessonData] = useState(null);

  const handleLessonSubmit = (data) => {
    setLessonData(data); // Save the lesson data
  };

  return (
    <div>
      <LessonInput onSubmit={handleLessonSubmit} />
      {lessonData && <LessonOutput data={lessonData} />}
    </div>
  );
};

export default LessonContainer;
