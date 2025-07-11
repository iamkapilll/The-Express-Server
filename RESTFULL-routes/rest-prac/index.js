const express = require('express');
const bodyParser = require('body-parser'); 
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const comments = [
    { id: uuidv4(), username: 'Todd', comment: 'lol that is so funny' },
    { id: uuidv4(), username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
    { id: uuidv4(), username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
    { id: uuidv4(), username: 'onlysayswoof', comment: 'woof woof woof' }
];

// Home Route
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// Route to Display Comments
app.get('/comments', (req, res) => {
    res.render('comments/comments.ejs', { comments });
});

// // Catch-All Route (404 Page)
app.get('*', (req, res) => {
    res.render('comments/notfound.ejs');
});


app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})
