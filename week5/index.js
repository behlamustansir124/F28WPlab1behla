const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({ path: 'C:\\Users\\User\\Documents\\GitHub\\F28WPlab1behla\\week5\\.env' });

const app = express();
const port = 5000;



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
    } else {
        console.log('Connected to MySQL');
    }
});

app.get('/', (req, res) => {
    res.send("<h1> home page </h1>");
});

app.use('/', require('./routes/pages'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
