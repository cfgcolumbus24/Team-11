import React, { useState } from 'react';
import axios from 'axios';

const LLMPage = () => {
  const [prompt, setPrompt] = useState('');
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate', { prompt });
      setLessonPlan(response.data.response || 'No response available.');
    } catch (error) {
      console.error('Error generating content:', error);
      setLessonPlan('Error generating response.');
    }
    setLoading(false);
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '800px', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem',textAlign: 'center', marginBottom: '20px' }}>Generate AI Response</h2>
      <textarea
        style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' }}
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {lessonPlan && (
        <div style={{ marginTop: '20px' }}>
          <h3>Lesson Plan</h3>
          <p>{lessonPlan}</p>
        </div>
      )}
    </div>
  );
};

export default LLMPage;
