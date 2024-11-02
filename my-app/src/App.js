import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import FAQ from './components/faq'; // Adjust the path as necessary

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Routes>
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
