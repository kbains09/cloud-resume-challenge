require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 4000;

// Use CORS middleware
app.use(cors());

// Path to the JSON file
const countFilePath = process.env.COUNT_FILE_PATH || path.join(__dirname, 'userCount.json');

// Function to write to the JSON file
const writeUserCount = (newCount) => {
  const data = { count: newCount };
  fs.writeFileSync(countFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

// Initialize userCount.json if it doesn't exist
if (!fs.existsSync(countFilePath)) {
  writeUserCount(0); // Initialize with a count of 0
}

// Function to read the JSON file
const readUserCount = () => {
  const data = fs.readFileSync(countFilePath, 'utf-8');
  return JSON.parse(data);
};

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch and update the user count
app.get('/api/user-count', (req, res) => {
  try {
    // Read the current user count from the file
    const userCount = readUserCount();
    // Update the count
    const updatedCount = userCount.count + 1;
    // Write the updated count back to the JSON file
    writeUserCount(updatedCount);
    // Return the updated count to the client
    res.json({ count: updatedCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read or update user count' });
  }
});

// Swagger setup
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Serve the React frontend for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
