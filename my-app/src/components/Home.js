import Header from './Header';
import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom'; // If using React Router for navigation

function Home() {
   
    const videos = [
        { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
        { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
        { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
        { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
        { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
    ];
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
                <div style={{padding:'20px',backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', width: '100%', maxWidth:'1300px', margin: '20px auto', textalign: 'left' }}>
                <h3 style={{ marginTop: ' 15px', marginLeft: '30px' } }>
                        <span style={{ textDecoration: 'underline' }}>How to use the website</span>
                    <p style={{fontSize: '4vmin', marginLeft:'60px'} }>
                        1. Click the "LessonBot" image to acces our lesson planning and topic summarization tool.
                    </p>
                    <p style={{ fontSize: '4vmin', marginLeft: '60px' }}>
                        2. If you've logged in, click on 'Message Board' in the header to access your school's online forum.
                        </p>
                    <p style={{ fontSize: '4vmin', marginLeft: '60px' }}>
                        3. Click on the 'Resources' in the header to access our list of resources for improving teaching skills as well as resources for lesson planning.
                        </p>
                    <p style={{ fontSize: '4vmin', marginLeft: '60px' }}>
                        4. For troubleshooting and to view some other commonly asked questions click on 'FAQ' in the header.
                    </p>
                    </h3>
                </div>
                    <h2 style={{ marginBottom: '5px', marginTop:'40px' }}>Teaching Strategies Videos</h2>
                    <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px" }}>
                        {videos.map((video) => (
                            <VideoCard title={video.title} videoId={video.id}></VideoCard>
                        ))}
                    </div>
                   
                </header>
            </div>
    );
}

export default Home;
