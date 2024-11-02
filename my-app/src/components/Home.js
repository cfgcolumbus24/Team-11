
import Header from './Header';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-600 text-white">
            <Header />
            <div className="container mx-auto mt-12 p-6 bg-gray-700 bg-opacity-80 rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                    <Link to="/lessonbot" className="hover:scale-105 transform transition-transform">
                        <img src="/images/LessonBot.png" alt="LessonBot Logo" className="w-64 h-auto" />
                    </Link>
                </div>
                <p className="text-center text-4xl font-semibold mb-12 bg-gradient-to-r from-pink-500 to-teal-500 text-transparent bg-clip-text">
                    Welcome to LessonBot! Press the button to start teaching!
                </p>
                <div className="bg-gray-800 p-8 rounded-md shadow-md">
                    <h2 className="text-3xl font-bold mb-6 underline text-center">
                        How to Navigate the Site
                    </h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-700 rounded-md shadow-sm">
                            <p>1. Click on the "LessonBot" image to access our lesson plan generation and topic summarization tool.</p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-md shadow-sm">
                            <p>2. Click on 'Resources' in the header to access teaching improvement and lesson planning resources and videos.</p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-md shadow-sm">
                            <p>3. If you're logged in, click on 'Message Board' in the header to access your school's online forum.</p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-md shadow-sm">
                            <p>4. For any further questions, click on 'FAQ' in the header to view some common problems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
