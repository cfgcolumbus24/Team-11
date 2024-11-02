
import React from 'react';
import InPage from './LessonInput';
import LLM from './LLMPage';
import Header from './components/Header';

const LessonBot = () => {
    return (
        <div style={{backgroundColor: '#282c34'}}>
            <Header />
            <h1 style={{ textAlign: 'center', color: 'white', fontSize: '2.5rem' }}> Generate Your Lesson Plan!</h1>
            <h2> <InPage /> </h2>
            <h3> <LLM/> </h3>
        </div>
    );
};

export default LessonBot;
