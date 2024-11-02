import './App.css';
import Header from './components/Header'; // Ensure this path is correct
import React from 'react';
import logo from './logo.svg'; // Ensure this path is correct
import AppRouter from './router'; // Ensure this path is correct
import GridListWithCTA from './components/GridListWithCTA'; // Ensure this path is correct

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
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* Add the new GridListWithCTA component below the existing content */}
        <GridListWithCTA />
      </div>
    </AppRouter>
  );
}

export default App;
