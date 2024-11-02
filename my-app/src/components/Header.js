// src/components/Header.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active link styling
import './Header.css';

const Header = () => {
    const location = useLocation(); // Get the current route location

    return (
        <header className="header">
            <div className="logo">
                <Link to="/home">
                    <img src="/images/oplogo.png" alt="Logo" style={{ height: '80px' }} />
                </Link>
                <Link to="/home">
                    <div className="name">
                        Class Craft
                    </div>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/lessonBot"
                            className={location.pathname === "/lessonBot" ? "active" : ""}
                        >
                            LessonBot
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/faq"
                            className={location.pathname === "/faq" ? "active" : ""}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/messageboard"
                            className={location.pathname === "/messageboard" ? "active" : ""}
                        >
                            Message Board
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resources"
                            className={location.pathname === "/resources" ? "active" : ""}
                        >
                            Resources
                        </Link>
                    </li>
                    <li>     
                        <Link
                            to="/login"
                            className={location.pathname === "/login" ? "active" : ""}
                        >
                            Sign Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
