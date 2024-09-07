// // server.js
// const express = require('express');
// const app = express();
// const path = require('path');

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Define routes
// app.get('/', (req, res) => {
//     // Send the index.html file
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/hoodie', (req, res) => {
//     // Send the hoodie.html file
//     res.sendFile(path.join(__dirname, 'public', 'hoodie.html'));
// });

// app.get('/tshirt', (req, res) => {
//     res.sendFile(path.join(__dirname, 'tshirt.html'));
// });

// app.get('/cart', (req, res) => {
//     res.sendFile(path.join(__dirname, 'cart.html'));
// });

// app.get('/sweatshirt', (req, res) => {
//     res.sendFile(path.join(__dirname, 'sweatshirt.html'));
// });

// app.get('/jeans', (req, res) => {
//     res.sendFile(path.join(__dirname, 'jeans.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'about.html'));
// });

// app.get('/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'style.css'));
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });