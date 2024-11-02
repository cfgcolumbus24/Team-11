import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom'; // If using React Router for navigation

function Home() {
   
    const videos = [
        { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
        { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
        { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
        { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
        { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
    ];
    return (
            <div className="Home">
                <Header />
            <header className="App-header">
                <Link to="/lessonbot">
                    <img src="/images/LessonBot.png" alt="logo" />
                </Link>
                    <p>
                        Welcome to LessonBot! Press the button to start teaching!
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
    );
}

export default Home;
