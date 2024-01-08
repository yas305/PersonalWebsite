const express = require('express');
const path = require('path');
const fs = require('fs'); // Make sure you require 'fs'
const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));





app.get('/tracking.gif', (req, res) => {
    // Log the request to console or a file, or store in a database
    console.log('Tracking pixel requested:', req.headers);

    // Path to your tracking image
    const pixelPath = path.join(__dirname, 'public', 'logo192.png');

    // Read the image file from the filesystem
    const pixel = fs.readFileSync(pixelPath);

    // Set the content type to the correct image MIME type
    res.set('Content-Type', 'image/png'); // Changed to 'image/png' for a PNG file

    res.send(pixel);
});








app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);
