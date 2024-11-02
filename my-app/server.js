const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Ensure the API key is present
if (!process.env.OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY is missing. Make sure it is set in the .env file.');
  process.exit(1); // Exit the process if the API key is missing
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Load the API key securely
});

app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Invalid input. Please provide a valid prompt.' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error.response ? error.response.data : error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
