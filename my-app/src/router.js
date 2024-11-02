// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQ from './screens/faq'; // Ensure the path is correct
import Header from './components/Header';
import MessageBoard from './screens/messageboard';
import Login from './screens/login';
import Resources from './screens/resources';
import Home from './screens/Home';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} /> {/* FAQ component */}
                <Route path="/screens/login" element={<Login/>} /> {/* Login component */ }
                <Route path="/screens/faq" element={<FAQ />} /> {/* FAQ component */}
                <Route path="/screens/messageboard" element={<MessageBoard />} /> {/* MessageBoard component */}
                <Route path="/screens/resources" element={<Resources />} /> {/* MessageBoard component */}

                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
