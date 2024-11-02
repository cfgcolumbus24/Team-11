import './App.css';
import Header from './components/Header';
import React from 'react';
import logo from './logo.svg';
import AppRouter from './router'; // Import the Router

function App() {


    return (
      <AppRouter>
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
      </div>
  </AppRouter>
);
}

export default App;
