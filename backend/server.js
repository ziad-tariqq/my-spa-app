// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// plain TEXT
app.get('/api/hello', (req, res) => {
  res.type('text/plain').send('Hello from the backend 🚀');
});

// JSON
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'backend',
    time: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
