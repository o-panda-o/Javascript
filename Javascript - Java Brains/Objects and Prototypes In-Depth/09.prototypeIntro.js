/**
 * The advantage of prototype is that if we create any behaviour
 * in it then any other object which creates it using `new` by 
 * default refers there, which saves from creating the same stuff
 * again and again just like other OOPs language and hence by making
 * the program memory efficient.
 * 
 * You can put anything on the prototype at the runtime and the moment
 * we do it anything which is the object of it can access it, as stuffs
 * are accessed during the runtime, not at the compile time.
 */
function foo(){};
console.log(foo);
console.log(foo.prototype);

var fooObj=new foo();
console.log(fooObj);

foo.prototype.hello="foo";
foo.prototype.test="test";
console.log(fooObj.__proto__.hello);// gets the value from the original object

// as it finds `hello` in its scope it doesn't need to go to top
fooObj.hello="hello";
console.log(fooObj.hello);
delete fooObj.hello;

// as `hello` is not there in its scope, it goes to `__proto__` and checks for it
console.log(fooObj.hello); 

// finds the value at `__proto__` so returns it
console.log(fooObj.test); 