const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React Router (return `index.html` for all routes)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 ARK Global Services website is running at http://localhost:${port}`);
  console.log('📱 Press Ctrl+C to stop the server');
  console.log('🎨 All animations and effects are now active!');
});