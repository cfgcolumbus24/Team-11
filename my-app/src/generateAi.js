import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export const generateAIResponse = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Change model as needed
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].text.trim(); // Adjust as necessary
  } catch (error) {
    console.error('Error fetching from OpenAI API:', error);
    throw error; // Handle error appropriately
  }
};
