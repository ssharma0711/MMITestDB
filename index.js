const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Simple in-memory storage for testing
let testData = [];
let nextId = 1;

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AgenticCopilot Test App is running' });
});

app.get('/api/data', (req, res) => {
  res.json({ data: testData, count: testData.length });
});

app.post('/api/data', (req, res) => {
  const { item } = req.body;
  if (!item) {
    return res.status(400).json({ error: 'Item is required' });
  }
  
  const newItem = {
    id: nextId++,
    item: item,
    timestamp: new Date().toISOString()
  };
  
  testData.push(newItem);
  res.status(201).json({ message: 'Item added', data: newItem });
});

app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = testData.findIndex(item => item.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  const deleted = testData.splice(index, 1);
  res.json({ message: 'Item deleted', data: deleted[0] });
});

// Start server
app.listen(PORT, () => {
  console.log(`AgenticCopilot Test App listening on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the application`);
});

module.exports = app;
