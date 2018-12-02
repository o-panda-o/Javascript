console.log(Object);
console.log(Object());
console.log(Object.prototype);
console.log(Object.__proto__.constructor);  


console.log("Inspecting both ways of creating an object");
// Creating an object
var obj=new Object(); // same as var obj={};
console.log(obj);
console.log(obj.__proto__);
console.log(obj.__proto__.constructor);

var simple={};
console.log(simple);
console.log(simple.__proto__);
console.log(simple.__proto__.constructor);
