/**
 * Functions:
 *  + Functions can be written in literal form
 *  + It is a value that can be assigned to a variable
 *  + It can be called by passing in arguments
 *  + They are objects
 *  + It have the feature of flexible argument count
 *  + No function overloading
 *  + Default argument
 *  + The `arguments` argument
 */

 // Function declaration
function sayHello(firstName,lastName){
    console.log("Hello "+firstName+" "+lastName);
}
sayHello("Bibhuti","Panda");
sayHello("Bibhuti"); // remaining args are undefined
sayHello("Bibhuti","Panda","Bhusan"); // remaining args are not taken into consideration


/**
 * Function with return values
 */
function add(a,b){
    return a+b;
}
console.log(add(1,2));
var result=add(2," Bibhuti");
console.log(result);
console.log(add());

/**
 * Function as a value
 */
// function expression
var multiply=function multiplication(a,b){
    return a*b;
}
console.log(multiply(2,10)); // can't use multiplication anyway

// Better way to declare function as a value
// Also called anonymous function expression
// In this case the function will get lost
var divide=function(a,b){
    return a/b;
}
console.log(divide(2,7));

/**
 * Function as argument
 */
var executor=function(value,a,b){
    console.log(value(a,b));
}
executor(divide,1,2);

/**
 * Function as object
 */
var details={
    "contains":"function"
}
details.greeting=function(){
    console.log("Hello World!");
}

console.log(details);
details.greeting();

// IIFE(Immidiately Invokable Function Expression)
(function(name){
    console.log(`IIFE ran by ${name}`);
})('Bibhuti');