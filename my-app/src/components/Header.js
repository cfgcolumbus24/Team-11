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
                        <Link to="../screens/login">Login</Link>
                    </li>
                    <li>
                        <Link to="../screens/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="../screens/messageboard">Message Board</Link>
                    </li>
                    <li>
                        <Link to="../screens/resources">Resources</Link>
                    </li>
                
                </ul>
            </nav>
        </header>
    );
};

export default Header;
