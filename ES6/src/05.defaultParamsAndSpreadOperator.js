"use strict"

// Default value assigning to parameters
function greet(greeting='Hello'){
    console.log(greeting);
}

greet();

// spread operator
let args=[1,2,3,4,5];
let more_args=[6,7,8,9,0];

function test(){
    console.log(args+' '+more_args);
}
// ES5 way
test.apply(null,args);
// ES6
test(...more_args,...args);