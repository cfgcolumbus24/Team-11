// import React, { useState } from 'react';
// import axios from 'axios';
// import LessonInput from './LessonInput'; // Import the LessonInput component

// const LLMPage = () => {
//   // Lifted state for form inputs
//   const [grade, setGrade] = useState('');
//   const [subject, setSubject] = useState('');
//   const [classSize, setClassSize] = useState('');
//   const [time, setTime] = useState('');

//   const [prompt, setPrompt] = useState('');
//   const [lessonPlan, setLessonPlan] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     try {
//       const customPrompt = `
//         Grade: ${grade}
//         Subject: ${subject}
//         Class Size: ${classSize}
//         Time: ${time} minutes

//         ${prompt}
        
//         Create a detailed lesson plan based on the above information.
//       `;

//       const response = await axios.post('http://localhost:5000/generate', { prompt: customPrompt });
//       setLessonPlan(response.data.response || 'No response available.');
//     } catch (error) {
//       console.error('Error generating content:', error);
//       setLessonPlan('Error generating response.');
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ margin: '20px auto', maxWidth: '800px', fontFamily: 'Arial, sans-serif' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Generate AI Response</h2>
//       <LessonInput
//         grade={grade}
//         setGrade={setGrade}
//         subject={subject}
//         setSubject={setSubject}
//         classSize={classSize}
//         setClassSize={setClassSize}
//         time={time}
//         setTime={setTime}
//       />
//       <button
//         onClick={handleGenerate}
//         disabled={loading}
//         style={{
//           display: 'block',
//           margin: '20px auto',
//           padding: '10px 20px',
//           fontSize: '16px',
//           backgroundColor: '#007BFF',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer'
//         }}
//       >
//         {loading ? 'Generating...' : 'Generate'}
//       </button>

//       {lessonPlan && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Lesson Plan</h3>
//           <p>{lessonPlan}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LLMPage;

import React, { useState } from 'react';
import axios from 'axios';
import LessonInput from './LessonInput'; // Import the LessonInput component

const LLMPage = () => {
  // Lifted state for form inputs
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [classSize, setClassSize] = useState('');
  const [time, setTime] = useState('');

  const [prompt, setPrompt] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const customPrompt = `
        Grade: ${grade}
        Subject: ${subject}
        Class Size: ${classSize}
        Time: ${time} minutes

        ${prompt}
        
        Create a detailed lesson plan based on the above information.
      `;

      const response = await axios.post('http://localhost:5000/generate', { prompt: customPrompt });
      setLessonPlan(response.data.response || 'No response available.');
    } catch (error) {
      console.error('Error generating content:', error);
      setLessonPlan('Error generating response.');
    }
    setLoading(false);
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '800px', fontFamily: 'Arial, sans-serif' }}>
      {/* Updated header text */}
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        fontSize: '42px', 
        fontWeight: '900', 
        color: '#000', 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' 
      }}>
        Generated AI Lesson Plans
      </h1>
      <LessonInput
        grade={grade}
        setGrade={setGrade}
        subject={subject}
        setSubject={setSubject}
        classSize={classSize}
        setClassSize={setClassSize}
        time={time}
        setTime={setTime}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 123, 255, 0.3)',
          transition: 'background-color 0.3s, transform 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {lessonPlan && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#333' }}>Lesson Plan</h3>
          <p>{lessonPlan}</p>
        </div>
      )}
    </div>
  );
};

export default LLMPage;
