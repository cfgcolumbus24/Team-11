import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBoard from './components/messageboard.js';
import Login from './components/login.js';
import Header from './components/Header';
import React from 'react';
import VideoCard from './components/VideoCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LLMPage from './LLMPage'; 
import LessonInput from './LessonInput'; 
import AppRouter from './router'; // Import the Router
import HandleLessonSubmit from './HandleLessonSubmit';


function App() {

  const videos = [
  { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
  { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
  { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
  { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
  { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
];
    return (
    <div>
      <HandleLessonSubmit/>

     
      {/* <AppRouter>
        <div className="App">
              <Header />
         <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          <p>
               Edit <code>src/App.js</code> and save to reload.
          </p>
            <h2 style={{ marginBottom: '5px', textAlign: "left"  }}>Teaching Strategies Videos</h2>
              <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px 20px", width: "95%"}} className ="Videos">
              {videos.map((video) => (
                <div key={video.id} style={{ display: "inline-block", width: "300px", marginRight: "10px" }}>
              <VideoCard title={video.title} videoId={video.id} />
              </div>
              ))}
              </div>
        <LLMPage />
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
          Learn React
          </a>
          </header>
      </div>
  </AppRouter> */}
  </div>
);
}

export default App;
