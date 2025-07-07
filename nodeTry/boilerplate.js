// by this way we can simply create the directory in the file system using the fs module
// we can also create the nested directory using the recursive option in the mkdir method
// this is the boilerplate code for creating the directory in the file system 


const fs = require('fs');

// fs.mkdir('Dogs', {recursive: true}, (err)=>{   // this will make one directory as dogs directory
//     if(err) throw err;
//     console.log('Dogs directory created');
// });

fs.mkdir('Dogs/doggies', {recursive: true}, (err)=>{   // this will nested directory in the dogs directory
    if(err) throw err;
    console.log('Dogs directory created');
});