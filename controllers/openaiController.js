// openaiController.js

const openai = require('../config/openaiConfig');

const generateMeta = async (req, res) => {
  const { title } = req.body;

  try {
    const description = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Come up with a description for a YouTube video called "${title}"`,
        },
      ],
      max_tokens: 100,
    });

    const tags = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Come up with 10 keywords for a YouTube video called ${title}`,
        },
      ],
      max_tokens: 100,
    });

    res.status(200).json({
      description: description.choices[0].message.content,
      tags: tags.choices[0].message.content,
    });
  } catch (error) {
    console.error(
      'Error generating description:',
      error.response?.data || error.message
    );
  }
};

module.exports = { generateMeta };
