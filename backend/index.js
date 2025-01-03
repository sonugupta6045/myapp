const express = require('express');
const mongoose = require('./Models/database'); // Adjust the path as needed
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('MongoDB and Node.js connected with Mongoose');
});


app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/products',AuthRouter);
// Start the server

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
