const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',       // your MySQL host
  user: 'root',            // your MySQL username
  password: '696969', // your MySQL password
  database: 'golddb',  // the database you want to use
  port: 3306
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//register route
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ success: true, message: "User registered successfully!" });
  });
});

app.get('/users', (req, res) => {
  const query = "SELECT id, username, email FROM users"; // never send passwords in plain text
  db.query(query, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

