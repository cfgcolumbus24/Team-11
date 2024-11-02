// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQ from './components/faq'; // Ensure the path is correct
import Home from './components/Home'; // Ensure you have this component
import Header from './components/Header';
import MessageBoard from './components/messageboard';
import Login from './components/login';
import Resources from './components/resources';
import LessonBot from './LessonBot';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/login" element={<Login/>} /> {/* Login component */ }
                <Route path="/faq" element={<FAQ />} /> {/* FAQ component */}
                <Route path="/messageboard" element={<MessageBoard />} /> {/* MessageBoard component */}
                <Route path="/resources" element={<Resources />} /> {/* MessageBoard component */}
                <Route path="/lessonbot" element={<LessonBot />} /> {/* MessageBoard component */}

                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
