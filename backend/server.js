const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let vocabList = []; // stores the words

// Get all saved words
app.get('/api/vocab', (req, res) => {
  res.json(vocabList);
});

// Save a new word
app.post('/api/vocab', (req, res) => {
  const { word } = req.body;
  if (word && word.trim() !== '') {
    vocabList.push(word.trim());
    res.json({ success: true, vocabList });
  } else {
    res.status(400).json({ success: false, message: 'Word cannot be empty' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
