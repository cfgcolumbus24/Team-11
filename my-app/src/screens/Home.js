import Header from '../components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import logo from '../logo.svg';

function Home() {
   
 
    return (
            <div className="Home">
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
            </div>
    );
}

export default Home;
