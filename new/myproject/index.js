const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.listen(3000, ()=>{
    console.log('listening on the 3000')
})