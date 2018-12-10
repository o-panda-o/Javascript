var a=10;
var b=true;
var c='Hello';

// It'll throw an error
// a=true;

function greet():string{
    return "Good Morning";
}

// Correct way for implicit typing to work
var greeting=greet();
// In this way the implicit typing won't work
var greetMe;
greetMe=greet();

console.log(greeting);
