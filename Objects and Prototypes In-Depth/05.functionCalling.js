/**
 * Method 1 of calling function
 */
function sayHello(){
    console.log("Say Hello");
};
sayHello(); // function called

/**
 * Method 2 of calling function
 */
var object={};
object.sayHello=function(){
    console.log("Say Hello");
};
object.sayHello(); // function called

/**
 * Method 3 of calling function
 */
new sayHello(); // function called

/**
 * Method 4 using call(binds the argument in the function scope)
 */
sayHello.call();