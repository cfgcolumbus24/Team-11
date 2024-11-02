import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OpenAI from 'openai';
import { generateAIResponse } from './generateAi';

const LLMPage = ({lessonData}) => {
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (lessonData) {
      handleGenerate(lessonData);
    }
  }, [lessonData]);

  const handleGenerate = async (prompt) => {
    setLoading(true);
    const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY});

    try {
      const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
              { role: "system", content: "You are a helpful assistant." },
              {
                  role: "user",
                  content: "Write a haiku about recursion in programming.",
              },
          ],    model: "gpt-4o-mini",
          messages: [
              { role: "system", content: "You are a helpful assistant." },
              {
                  role: "user",
                  content: "Write a haiku about recursion in programming.",
              },
          ],
      });

      setLessonPlan(completion.choices[0].message.content || 'No response available.');
    } catch (error) {
      console.error('Error generating content:', error);
      setLessonPlan('Error generating response.');
    }

    setLoading(false);
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '800px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Generate AI Response</h2>
      {loading ? (
        <p>Generating...</p>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h3>Lesson Plan</h3>
          <p>{lessonPlan}</p>
        </div>
      )}
    </div>
  );
};

export default LLMPage;
