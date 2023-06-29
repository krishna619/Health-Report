const express = require('express');
const generateRoute = require('./routes/reportRoute');
const connectDb = require('./config/dBConnection'); 
const requireLogin = require('./middleware/requireLogin')
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();

app.get('/',requireLogin,(req, res) => {
    res.render('index');
});
app.get('/login',(req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');
});
app.use('/', generateRoute);

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
