// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Header.css'; // Optional: for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="/images/oplogo.png" alt="Logo" style={{ height: '80px' }} />
                </Link>
            </div>
            <nav>

                <ul>
                    <li>     
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/messageboard">Message Board</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                
                </ul>
            </nav>
        </header>
    );
};

export default Header;
