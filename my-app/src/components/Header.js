// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router for navigation
// import './Header.css'; // Optional: for styling

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="logo">
//                 <Link to="/home">
//                     <img src="/images/oplogo.png" alt="Logo" style={{ height: '80px' }} />
//                 </Link>
//                 <Link to="/">
//                     <div className="name">
//                         Class Craft
//                     </div>
//                 </Link>
                
//             </div>
//             <nav>

//                 <ul>
//                     <li>
//                         <Link to="/faq">FAQ</Link>
//                     </li>
//                     <li>
//                         <Link to="/messageboard">Message Board</Link>
//                     </li>
//                     <li>
//                         <Link to="/resources">Resources</Link>
//                     </li>
//                     <li>     
//                         <Link to="/login">Sign Out</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;

// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link to="/home">
                        <img src="/images/oplogo.png" alt="Logo" className="h-16" />
                    </Link>
                    <Link to="/" className="text-2xl font-semibold hover:text-teal-400">
                        Class Craft
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/faq" className="hover:text-teal-400 transition duration-200">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/messageboard" className="hover:text-teal-400 transition duration-200">
                                Message Board
                            </Link>
                        </li>
                        <li>
                            <Link to="/resources" className="hover:text-teal-400 transition duration-200">
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:text-teal-400 transition duration-200">
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
