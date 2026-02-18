const wordInput = document.getElementById('wordInput');
const saveBtn = document.getElementById('saveBtn');
const vocabListEl = document.getElementById('vocabList');

const API_URL = 'http://localhost:3000/api/vocab';

// Fetch and display vocab list
async function fetchVocab() {
  const response = await fetch(API_URL);
  const data = await response.json();
  vocabListEl.innerHTML = '';
  data.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    vocabListEl.appendChild(li);
  });
}

// Save new word
saveBtn.addEventListener('click', async () => {
  const word = wordInput.value;
  if (!word) return alert('Please type a word');
  
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ word })
  });

  wordInput.value = '';
  fetchVocab();
});

// Initial load
fetchVocab();
