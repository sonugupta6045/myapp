const express = require('express');
const mongoose = require('./database'); // Adjust the path as needed
const app = express();

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('MongoDB and Node.js connected with Mongoose');
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
