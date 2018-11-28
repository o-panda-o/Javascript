var a;
console.log(typeof a );
a=10;
console.log(typeof a);
a="Hello";
console.log(typeof a);
a=true;
console.log(typeof a);
/**
 * It is bug in JavaScript. 
 * Actually typeof null should literally return `null`
 * instead it returns as object. So we need to be careful
 * while using it.
 */
a=null;
console.log(typeof a);