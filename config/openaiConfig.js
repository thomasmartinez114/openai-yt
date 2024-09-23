// const { Configuration, OpenAIApi } = require('openai');
// require('dotenv').config();

// // Create configuration instance
// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY, // Ensure your API key is set correctly in the .env file
// });

// // Create OpenAI API instance
// const openai = new OpenAIApi(configuration);

// module.exports = openai;

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai;
