const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Point Express to your "view" folder (singular)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Middleware to parse form data (helpful for login and Adds pages)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Optional: serve static files (CSS, client JS, images) from a "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. Routes for all your EJS files
app.get('/', (req, res) => {
  res.render('login');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/student', (req, res) => {
  res.render('student');
});

app.get('/teacher', (req, res) => {
  res.render('teacher');
});

app.get('/assignment', (req, res) => {
  res.render('assignment');
});

app.get('/adds', (req, res) => {
  res.render('Adds'); // Matches "Adds.ejs" in your view folder
});

app.get('/nav', (req, res) => {
  res.render('nav');
});

app.get('/grades', (req, res) => {
  res.render('Grades');
});

app.get('/update', (req, res) => {
  res.render('Update');
} );

app.get('/delete', (req, res) => {
  res.render('Delete');
});

// 3. Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
