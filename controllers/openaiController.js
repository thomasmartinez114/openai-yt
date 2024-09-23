// openaiController.js

const openai = require('../config/openaiConfig');

const generateMeta = async title => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Come up with a description for a YouTube video called "${title}"`,
        },
      ],
    });

    // Check the structure of the response
    const description = response.choices[0].message.content;
    console.log(description);
    return description; // Return the description
  } catch (error) {
    console.error(
      'Error generating description:',
      error.response?.data || error.message
    );
  }
};

module.exports = { generateMeta };
