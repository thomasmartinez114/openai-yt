const express = require('express');
const { generateSOAP } = require('./controllers/openaiController');

// app setup
const app = express();
app.listen(4000, () => console.log('listening for request on port 4000'));

// middleware
app.use(express.json());
app.use(express.static('public'));

// routes
app.post('/openai/soap', generateSOAP);
