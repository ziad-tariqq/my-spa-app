// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());                // allow requests from the frontend during dev
app.use(express.json());

// simple health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'backend', time: new Date().toISOString() });
});

// example data route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend 🚀' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
