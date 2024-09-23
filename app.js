const express = require('express');
const { generateMeta } = require('./controllers/openaiController');

// app setup
const app = express();
app.listen(4000, () => console.log('listening for request on port 4000'));

// middleware
app.use(express.json());

// routes
app.post('/openai/meta', generateMeta);
