import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom'; // If using React Router for navigation

function Home() {
   

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
                    
           
                </header>
            </div>
    );
}

export default Home;
