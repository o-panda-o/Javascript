/**
 * There are 2 types:
 *  1. Primitives(Number, String, Boolean, Symbol, Undefined, null)
 *  2. Reference Types(Object, Function, Array)
 */

 /**
  * Primitives are copied by values
  */
let x=10;
let y=x;

x=20;
console.log("x "+x);
console.log("y "+y);

/**
 * Objects are copied by reference.
 */
let X={value:20};
let Y=X;

X.value=20;
// They refer to the same memory location
console.log("X has value - "+X.value);
console.log("Y has value - "+Y.value);

// Examples
// Example 1
let number=10;
function increase(number){
    ++number;
}
increase(number);
console.log(number);
// Example 2
let object={
    value:50
};
function changeValue(object){
    object.value=20;
};
changeValue(object);
console.log(object.value);