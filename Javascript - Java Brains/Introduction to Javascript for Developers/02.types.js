// Number
var a=10;
console.log(a);
var num=10.777;
console.log(num);
console.log(parseInt(num));

// String(there is no character in Javascript)
var helloWorld="Hello World!";
console.log(helloWorld);

// Boolean 
var ok=true;
console.log(ok);

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

/**
 * Difference between `undefined` and `null`
 *      + `undefined` -- nothing is there
 *      + `null` -- something is there
 */