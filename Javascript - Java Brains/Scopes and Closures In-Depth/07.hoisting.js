// Then it'll go to interpretation step
a=10;
console.log(b);
console.log(d); // As the compiler will not read the value it'll give `undefined`
c++;

// This will be studied at compilation step(first step)
// Does't matter where you declare it
var a;
var b;
var c;
var d=10;// `=10` won't be taken by compiler