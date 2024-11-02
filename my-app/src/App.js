import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBoard from './components/messageboard.js';
import Login from './login.js';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import VideoCard from './components/VideoCard';
import logo from './logo.svg';
import AppRouter from './router'; // Import the Router

function App() {

  const videos = [
  { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
  { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
  { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
  { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
  { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
];
    return (
      <AppRouter>
      <div className="App">
              <Header />
         <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          <p>
               Edit <code>src/App.js</code> and save to reload.
          </p>
            <h2 style={{ marginBottom: '5px' }}>Teaching Strategies Videos</h2>
              <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px" }}>
              {videos.map((video) => (
              <VideoCard title={video.title} videoId={video.id}></VideoCard>
              ))}
              </div>
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
  </AppRouter>
);
}

export default App;
