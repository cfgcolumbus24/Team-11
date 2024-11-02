// src/FAQ/page.js
import React from 'react';
import Header from '../components/Header'; // Adjust the path if needed
import './faq.css'; // Import the CSS file

const FAQ = () => {
    return (
        <div className="faq-container">
            <Header />
            <h1 className="faq-header">FAQ Page</h1>
            <p className="faq-description">Here you can find frequently asked questions.</p>
            <div className="faq-list">
                <ul>
                    <li className="faq-question">
                        <strong>How do I create a lesson plan?</strong>
                        <p>Click on the Lesson Plans button and fill in the blanks depending on what class you're planning for.
                            Then select 'Summarize' to have our bot write a summary for teachers to review a topic or click 'Lesson Plan'
                        to generate a usable lesson plan on the subject.</p>
                    </li>
                    <li className="faq-question">
                        <strong>What else can this help me with?</strong>
                        <p>Class Craft can also help you connect and learn from others in your area using our online anonymous message board. Feel free to ask question, respond to questions, or even just post some tips and tricks anytime you want. We also have some extra resources like links to videos, courses, and articles meant to make you a better teacher</p>
                    </li>
                    <li className="faq-question">
                        <strong>Why can't I post on the message board?</strong>
                        <p>You must be logged in to post or comment on the message board.</p>
                    </li>
                    <li className="faq-question">
                        <strong>How can this help my class out?</strong>
                        <p>Instead of spending all of your time making lesson plans and learning material, you can now spend it teaching.</p>
                    </li>
                    <li className="faq-question">
                        <strong>Who else will be on this platform?</strong>
                        <p>Other teachers will be on this platform. This is the place for teacher to truly learn to be teachers</p>
                    </li>
                    {/* Add more FAQs as needed */}
                </ul>
            </div>
        </div>
    );
};

export default FAQ;
