// app.js

const readline = require('readline');
const { generateMeta } = require('./controllers/openaiController');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('YouTube Video Title: \n', async title => {
  await generateMeta(title); // Ensure that `generateMeta` is awaited
  rl.close(); // Close the readline interface after processing
});
