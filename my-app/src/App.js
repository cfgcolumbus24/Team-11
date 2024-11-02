import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LLMPage from './LLMPage'; // Ensure this path matches where your file is located
import LessonInput from './LessonInput.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <LessonInput/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
