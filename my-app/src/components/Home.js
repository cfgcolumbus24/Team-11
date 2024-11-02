import Header from './Header';
import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom'; // If using React Router for navigation

function Home() {
   

    return (
            <div className="Home">
                <Header />
            <header className="App-header">
                <Link to="/lessonbot">
                    <img src="/images/LessonBot.png" alt="logo" />
                </Link>
                    <p>
                        Welcome to LessonBot! Press the button to start teaching!
                    </p>
                <div style={{marginTop: '60px',padding: '20px',backgroundColor: 'rgba(255, 255, 255, 0.1)',borderRadius: '12px',
                    width: '100%', maxWidth: '1300px', margin: '0 auto', textAlign: 'left', marginBottom: '80px'}}>
                    <h2 style={{ marginLeft: '30px' }}>
                        <span style={{ textDecoration: 'underline' }}>How navigate the site</span>
                    </h2>
                    <p style={{ fontSize: '4vmin', marginLeft:'50px' }}>
                        1. Click on the "LessonBot" image to access our lesson plan generation and topic summarization tool.
                    </p>
                    <p style={{ fontSize: '4vmin', marginLeft: '50px' }}>
                       2. Click on 'Resources' in the header to access teaching improvement and lesson planning resources and videos.
                    </p>
                    <p style={{ fontSize: '4vmin', marginLeft: '50px' }}>
                       3. If you're logged in, click on 'Message Board' in the header to access your school's online forum.
                    </p>
                    <p style={{ fontSize: '4vmin', marginLeft: '50px' }}>
                       4. For any further questions click on 'FAQ' in the header to view some common problems.
                    </p>
                </div>
           
                </header>
            </div>
    );
}

export default Home;
