import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OpenAI from 'openai';

// Access the API key
const apiKey = process.env.API_KEY;

console.log(`Your API key is: ${apiKey}`);


const LLMPage = ({lessonData}) => {
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (lessonData && !loading) {
      handleGenerate(lessonData);
      console.log("API Key:", process.env.REACT_APP_OPENAI_API_KEY);
    }
  }, [lessonData]);

  const handleGenerate = async (prompt) => {
    if (loading) return;
    setLoading(true);
    const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

    const throttleTime = 70000; // 20 seconds (20000 ms) between requests to avoid RPM limit
  await new Promise(resolve => setTimeout(resolve, throttleTime));

    try {
      const completion = await openai.chat.completions.create({
          model: "gpt-3.5-Turbo",
          messages: [
              {
                  role: "user",
                  content: prompt,
              },
          ],    model: "gpt-3.5-Turbo",
      });

      setLessonPlan(completion.choices[0].message.content || 'No response available.');
    } catch (error) {
      console.error('Error generating content:', error);
      setLessonPlan('Error generating response.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Lesson Plan</h2>
      {loading ? <p>Loading...</p> : <p>{lessonPlan}</p>}
    </div>
  );
};

export default LLMPage;
