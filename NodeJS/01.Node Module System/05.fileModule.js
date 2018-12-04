const fs=require('fs');

//const files=fs.readdirSync('./');
//console.log(files);

// use `$` in place of `./` to see the error message
fs.readdir('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result ',files);
});