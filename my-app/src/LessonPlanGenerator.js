import React, { useState } from 'react';
import { generateAIResponse } from './path-to-your-file'; // Adjust the import path accordingly

const LessonPlanGenerator = () => {
  const [prompt, setPrompt] = useState(''); // Store the user input
  const [lessonPlan, setLessonPlan] = useState(''); // Store the AI-generated lesson plan
  const [loading, setLoading] = useState(false); // Loading state for UI feedback
  const [error, setError] = useState(null); // Error state for UI feedback

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await generateAIResponse(prompt);
      setLessonPlan(response);
    } catch (err) {
      console.error(err);
      setError('Failed to generate lesson plan.'); // Handle error appropriately
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Lesson Plan Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your lesson plan details here..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Lesson Plan'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {lessonPlan && (
        <div>
          <h2>Generated Lesson Plan</h2>
          <p>{lessonPlan}</p>
        </div>
      )}
    </div>
  );
};

export default LessonPlanGenerator;
