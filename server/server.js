const express = require ('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require ('cors');
const port = process.env.PORT || 4000;

// Use CORS middleware
app.use(cors());

// Path to the JSON file
const countFilePath = path.join(__dirname, 'userCount.json');

// Function to read the JSON file
const readUserCount = () => {
  const data = fs.readFileSync(countFilePath, 'utf-8');
  return JSON.parse(data);
};

// Function to write to the JSON file
const writeUserCount = (newCount) => {
  const data = { count: newCount };
  fs.writeFileSync(countFilePath, JSON.stringify(data, null, 2), 'utf-8');
};

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

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
