// Callback -- Function calling another function
var a=10;
/**
 * When this function object is created it takes the 
 * snapshot of everything in its scope and remembers
 * inside the function itself.
 */
var sayHello=function(){
    console.log("SayHello");
};
setTimeout(sayHello,5000); // Delayed execution of function
console.log("Done"); // Demonstrates async nature of JS