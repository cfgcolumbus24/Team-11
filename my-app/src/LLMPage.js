import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

// Access the API key
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;


const LLMPage = ({lessonData}) => {
  const [lessonPlan, setLessonPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  
  useEffect(() => {
    if (lessonData && !generated) {
      console.log("before generate " + lessonData);
      handleGenerate(lessonData);
      console.log("after generate " + lessonData);
    }
  }, [lessonData]);

  const handleGenerate = async (prompt) => {
    if (loading || generated) return;
    setLoading(true);
    const openai = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});


    try {
      const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
              {
                  role: "user",
                  content: prompt,
              },
          ],    model: "gpt-3.5-turbo",
      });

      setLessonPlan(completion.choices[0].message.content || 'No response available.');
      setGenerated(true);
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
