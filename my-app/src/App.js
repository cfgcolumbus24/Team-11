import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LLMPage from './LLMPage'; // Ensure this path matches where your file is located

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/llm" element={<LLMPage />} />
    //   </Routes>
    // </Router> 
  <div>
    <LLMPage />
  </div>
  );
}

export default App;
