// app.js
const express = require('express');
const app = express();
const methodOverride = require('method-override');  // this allows us to use PUT and DELETE methods in forms
const path = require('path');

app.use(express.urlencoded({ extended: true }));  // Middleware to parse URL-encoded bodies
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let posts = [
    { id: 1, title: 'First Post', content: 'Hello World!' },
    { id: 2, title: 'Second Post', content: 'Learning CRUD in Express.js!' }
];

let postId = 3;

// Home -
app.get('/', (req,res)=>{
    res.render('home')
})

//  Show All Posts
app.get('/posts', (req, res) => {
    res.render('index', { posts });
});

// Form to Create New Post
app.get('/posts/new', (req, res) => {
    res.render('new');
});

// Create New Post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    posts.push({ id: postId++, title, content });
    res.redirect('/posts');
});

// Show One Post
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id == id);
    res.render('show', { post });
});

// Edit Form
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id == id);
    res.render('edit', { post });
});

// Update Post
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = posts.find(p => p.id == id);
    post.title = title;
    post.content = content;
    res.redirect(`/posts/${id}`);
});

// Delete Post
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(p => p.id != id);
    res.redirect('/posts');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
}); 
