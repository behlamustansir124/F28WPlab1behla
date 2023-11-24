const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
dotenv.config({ path: 'C:\\Users\\User\\Documents\\GitHub\\F28WPlab1behla\\week5\\.env' });

const app = express();
const port = 3000;
const exphbs = require('express-handlebars');


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// app.use(express.static(__dirname));
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
//app.engine('hbs', exphbs({defaultLayout: 
   // 'main', extname: '.hbs'
//}));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
    } else {
        console.log('Connected to MySQL');
    }
});



// defien the routes 
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
