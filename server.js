const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

app.get('/cv', (req, res) => {
    try {
        const pdfPath = path.join(__dirname, 'public', 'YahieAliCV.pdf');
        console.log('PDF Path:', pdfPath);
        res.sendFile(pdfPath);
    } catch (error) {
        console.error('Error serving CV:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is listening on port ${port}`);
