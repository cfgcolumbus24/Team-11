// import React from 'react';
// import InPage from './LessonInput';
// import LLM from './LLMPage';
// import Header from './components/Header';

// const LessonBot = () => {
//     return (
//         <div style={{ backgroundColor: '#282c34', minHeight: '100vh', paddingBottom: '20px' }}>
//             <Header />
//             <h1 className="gradient-title">Generate Your Lesson Plan!</h1>
//             <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//                 <InPage />
//             </div>
//             <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <LLM />
//             </div>
//         </div>
//     );
// };

// export default LessonBot;

import React, { useState } from 'react';
import LLM from './LLMPage';
import Header from './components/Header';

const LessonBot = () => {
    const [grade, setGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [classSize, setClassSize] = useState('');
    const [time, setTime] = useState('');

    return (
        <div style={{ backgroundColor: '#282c34', minHeight: '100vh', paddingBottom: '20px' }}>
            <Header />
            <h1 className="gradient-title">Generate Your Lesson Plan!</h1>

            <div className="lesson-form">
                <h2 className="form-title">Enter Lesson Information</h2>
                <input
                    type="text"
                    placeholder="Enter grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Enter class size"
                    value={classSize}
                    onChange={(e) => setClassSize(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Enter time (min)"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="input-field"
                />
                <button className="submit-button">Submit</button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <LLM />
            </div>
        </div>
    );
};

export default LessonBot;