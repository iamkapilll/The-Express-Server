const express = require('express')
const app = express()
const path = require('path') 



const redditData = require('./data.json')
// console.log(redditData)

// app.use(express.statica('public'))  // if requesting from the same directory
app.use(express.static(path.join(__dirname, 'public')))  // if requesting from the same or different directory , will do the same work  // for css inside that public folder


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))// this is the path to the views folder from we can access it form any other folder in the project
// The first "views" must always be "views" because it's a predefined setting in Express.
// The second "views" should match your actual folder name where the .ejs files are stored.

app.get('/random', (req,res)=>{
    const num = Math.floor(Math.random()*10)+1
    res.render('random',{num}) // this will send the random.ejs file along with that random number to the browser as a response and instead of send we use render and this will create a random number
})

app.get('/', (req,res)=>{
    res.render('home.ejs')  // this will send the home.ejs file to the browser as a response and instead of send we use render
})  

app.get('/cats', (req,res)=>{
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']
    res.render('cats.ejs',{cats})  // this will send the cats.ejs file along with that array of cats to the browser as a response and instead of send we use render
})

app.get('/r/:subreddit', (req,res)=>{  //The : before subreddit means it is a route parameter.
    const {subreddit} = req.params
    const data = redditData[subreddit]
    if(data){
        res.render('subreddit', {...data})

    } else{
        res.render('notfound',{subreddit})
    }
})


app.listen(3000,(req, res)=>{
    console.log('listening on the port 3000')
})






  