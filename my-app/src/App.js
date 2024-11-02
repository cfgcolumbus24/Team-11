import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LLMPage from './LLMPage'; 
import LessonInput from './LessonInput'; 

function App() {
  return (

  <div>
    <LLMPage />
    {/* <LessonInput /> */}
  </div>
  );
}

export default App;
