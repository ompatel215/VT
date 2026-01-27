// Simple Express.js Server for Static Files
// Run with: node server.js
// Note: Authentication is now handled client-side

const express = require('express');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('.'));

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📁 Serving static files`);
});
