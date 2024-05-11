const express = require('express');
const http = require('http');
const expressAsyncErrors = require('express-async-errors');

// Load environment variables
require('dotenv').config();

// Connect to database
require('./app/startup/db');

const app = express();

// Load routes
const v1Routes = require('./app/routes/v1/routes');
app.use('/api/v1', v1Routes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Student Backend' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const port = process.env.PORT || 5001;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
