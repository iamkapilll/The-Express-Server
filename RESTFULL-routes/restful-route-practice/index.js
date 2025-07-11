const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

const {v4: uuidv4} = require('uuid');





const comments = [
   {
    id : uuidv4(),
    name :'suyog',
    comment :' this is comment'
   },
   {
    id : uuidv4(),
    name : 'kshitiz doe',
    comment : ' this is comment'
   },
   {
    id : uuidv4(),
    name : 'kalyan',
    comment : ' this is comment'
   },
   {
    id : uuidv4(),
    name : 'ujjwal doe',
    comment : ' this is comment'
   }
]





app.get('/', (req,res)=>{
    res.render('homepage.ejs')
})


app.get('/comments', (req,res)=>{                       // this is the route for showing the comments in list
    res.render('comments.ejs', {comments})
})

app.get('/comments/new', (req,res)=>{
    res.render('comments/newcomment.ejs')
})

app.post('/comments', (req,res)=>{
    const {name, comment} = req.body
    comments.push({id:uuidv4(), name, comment})
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/showcomment.ejs', {comment})
})



















app.get('/*', (req,res)=>{
    res.render('nothingfound.ejs')
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')

})