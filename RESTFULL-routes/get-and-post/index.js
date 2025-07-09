const express = require('express')
const bodyParser = require('body-parser');                                       //1. const bodyParser = require('body-parser');
                                                                                   // This line imports the body-parser module, which is used to parse incoming request bodies in various formats (like JSON or URL-encoded data).
                                                                                // By including body-parser, you can easily extract data from requests sent to your server (such as form data or JSON) and access it via req.body.
const path = require('path')
const app = express()

const methodOverride = require('method-override')

const { v4: uuidv4 } = require('uuid');


app.use(bodyParser.urlencoded({ extended: true }))                                       //bodyParser.urlencoded({ extended: true }) specifically parses URL-encoded data (like form submissions) and makes the parsed data accessible through req.body.

app.use(express.json())                                                               // It is used to parse JSON-formatted request bodies.
                                                                                       //When you use app.use(express.json()), Express will automatically parse JSON data sent in requests (via the body) before it reaches your route handlers.
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



let comments = [
    {   id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {   id: uuidv4(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {   id: uuidv4(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {   id: uuidv4(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/', (req,res)=>{
    res.render('comments/home.ejs')
})
 
app.get('/comments', (req,res)=>{
    res.render('comments/index.ejs', {comments})                                     //this is used to show the comments in LIST format          //The res.render() method is used to render a view and send the rendered HTML string to the client., and there we sent the whhole comments array to the comments/index.ejs file
})


app.get('/comments/new', (req,res)=>{                                              //this is a form  //this is used to show the form to add 
    res.render('comments/new.ejs')
})

app.post('/comments', (req,res)=>{              // yesma chai hamle /comments rakhne ko karan chai method "post " i.e form submit garne bela post method le submit garem bhane tyo submit vayeko data /comments ma dekhinxa                                    //here we hava used the post as a method in the form and the /comments is the action where we can link with the form in the url area of search bar      //this is used to add new comments
    const {username, comment} = req.body
    comments.push({username, comment, id: uuidv4()})
    res.redirect('/comments')                                                          // this line is used to redirect to the comments page after adding the comment for the user 
})


app.get('/comments/:id', (req,res)=>{
    const {id} = req.params
    const comment = comments.find(c => c.id === (id))
    res.render('comments/show.ejs', {comment})
})


app.get('/comments/:id/edit', (req,res)=>{
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit.ejs', {comment})
})



app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params
    const { comment } = req.body                                  // yo chai mathi ko form bata aayeko data ho i.e comments/edit.ejs ma gayera edit garne bela ma comment ko form bata aayeko data ho
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = comment
    res.redirect('/comments')
})


app.delete('/comments/:id', (req,res)=>{
    const {id} = req.params
    comments = comments.filter(c => c.id !== id)    // this line is used to filter the comments array and remove the comment with the specified id
    res.redirect('/comments')               
})


















app.get('/tocos', (req,res)=>{
    res.send('/GET tocos response')
})

app.post('/tocos', (req,res)=>{
    const {meat,qty} = req.body
    res.send(`here is your ${qty} ${meat}`)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})