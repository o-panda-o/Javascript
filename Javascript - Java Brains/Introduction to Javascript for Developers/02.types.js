// Number
var a=10;
console.log(a);
let num='10.777';
console.log(parseFloat(num));
console.log(parseInt(num));
console.log(parseFloat(num).toFixed(3));
console.log(parseFloat(num).toFixed(1));

// String(there is no character in Javascript)
var helloWorld="Hello World!";
console.log(helloWorld);

// Boolean(true or false)
var ok=true;
console.log(ok);
console.log('Looking into the behaviour of Boolean function '+Boolean(!ok));

// No strong typing, so no error
a="Weak or loose typing of JavaScript feature";
console.log(a);

// 'undefined' type --- special type in JavaScript
var value;//declaration -- by default its value is `undefined`
console.log(value); 
value=42;//definition
console.log(value);

// 'null' type -- special type in JavaScript
var b;
console.log(b);
b=null;
console.log(b);

// 'Symbol'
const sym=Symbol();
console.log(sym);

/**
 * Difference between `undefined` and `null`
 *      + `undefined` -- nothing is there
 *      + `null` -- something is there
 */

 /**
  * Primitive Data Types:
  * - Stored directly in the location of variable access
  * - Stored on the stack
  * -  String, Number, Boolean, Null, Undefined, Symbol(ES6)
  * 
  * Reference Data Type:
  * - Accessed by reference
  * - Object that are stored on the heap
  * - A pointer to location on memory
  * - Ex: Arrays, Object Literals, Functions, Dates, etc.
  */