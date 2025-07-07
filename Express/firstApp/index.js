// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

/* ---------------------------------------
   ROUTES: Define different endpoints
   --------------------------------------- */

// 1️⃣ Home Route - Handles GET requests to '/'
app.get('/', (req, res) => {
    res.send('This is the home page and this is my area so dont even think you are going to escape from here cause i am the superman'); // Sends a response to the client
});

// 2️⃣ Dynamic Route - Handles GET requests to '/r/:subreddit/:postId'
// ':subreddit' and ':postId' are dynamic URL parameters
// 

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`This is the ${subreddit} subreddit page`);
});


app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`Viewing Post ID ${postId} on subreddit ${subreddit}`);
});



// 3️⃣ Cats Route - Handles GET requests to '/cats'
app.get('/cats', (req, res) => {
    res.send('Meow'); // Response when the user visits '/cats'
});

// 4️⃣ Dogs Route - Handles GET requests to '/dogs'
app.get('/dogs', (req, res) => {
    res.send('Woof!'); // Response when the user visits '/dogs'
});

// 5️⃣ POST Request to '/cats' - Different from GET
app.post('/cats', (req, res) => {
    res.send('POST request to /cats!!! This is different from a GET request');
});


app.get('/search', (req, res) => {    //http://localhost:3000/search?q=superman  you can search for anything you want

    const { q } = req.query; // Extract the query parameter 'q' from the URL
    if(!q){
       return res.send('nothing found if nothing searched')   // that return is important, it stops the function execution if q is not provided and the browser will only sends one r
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})


// 6️⃣ Catch-All Route - Handles all unknown routes
app.get('*', (req, res) => {
    res.send("I don't know that path"); // This runs if no other routes match
});

/* ---------------------------------------
   SERVER: Start listening for requests
   --------------------------------------- */

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
