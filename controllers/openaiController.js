// openaiController.js

const openai = require('../config/openaiConfig');

const generateSOAP = async (req, res) => {
  const { input } = req.body;

  try {
    const description = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `As a massage therapist, please generate SOAP notes according to this information provided by the patient.  Here is the patient information: ${input}`,
        },
      ],
      max_tokens: 100,
    });

    // const tags = await openai.chat.completions.create({
    //   model: 'gpt-3.5-turbo',
    //   messages: [
    //     {
    //       role: 'user',
    //       content: `Come up with 10 keywords for a YouTube video called ${title}`,
    //     },
    //   ],
    //   max_tokens: 100,
    // });

    res.status(200).json({
      description: description.choices[0].message.content,
      // tags: tags.choices[0].message.content,
    });
  } catch (error) {
    console.error(
      'Error generating SOAP:',
      error.response?.data || error.message
    );
  }
};

module.exports = { generateSOAP };
