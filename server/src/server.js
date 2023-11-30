//Configuration

const express = require('express');
require('dotenv').config(); // Load environment variables from a .env file
const app = express();

const PORT = process.env.PORT || 3000;

//JSON request
app.get('/json', (req, res) => {
    res.json({ message: 'Hello from Nginx!' });
});

//HTML request
app.get('/html', (req, res) => {
    res.send('<h1>Hello from Nginx in HTML!</h1>');
});
//PUT request
app.put('/text', (req, res) => {
    res.send('This is a PUT request');
});

// Headers
app.all('/headers', (req, res) => {
    res.json({ headers: req.headers });
});
app.get('/', (req, res) => {
    res.send('Invalid path. Try /json or /html.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
