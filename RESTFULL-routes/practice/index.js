const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const comments = [
    { id: uuidv4(), username: 'Todd', comment: 'lol that is so funny' },
    { id: uuidv4(), username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
    { id: uuidv4(), username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
    { id: uuidv4(), username: 'onlysayswoof', comment: 'woof woof woof' }
]

app.get('/', (req, res) => {                //home
    res.render('comments/home.ejs')
})

app.get('/comments', (req, res) => {                        //list
    res.render('comments/index.ejs', { comments })
})

app.get('/comments/new', (req, res) => {                    //new comment with form   YO VANEKO FORM KO PAGE MA JANALAI MATRA HO  that is route to form page only
    res.render('comments/new.ejs')
})

app.post('/comments', (req, res) => {                       //create new comment    YO VANEKO FORM KO DATA SERVER MA PATHAUNE ROUTE HO that is route to post data to server
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuidv4() })
    res.redirect('/comments')                               //redirect to list of comments
})



app.get('/comments/:id', (req, res) => {                    //show comment details
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show.ejs', { comment })
})



app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params
    const { comment } = req.body
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = comment
    res.redirect('/comments')
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})
