function sayHello(){
    console.log("Say Hello");
};

console.log("The prototype of `sayHello` is "+sayHello.prototype);

var hello=new sayHello();

console.log(hello);

var prototypeObj=sayHello.prototype;

console.log("Finding the constructor of the prototype(handy in backtracking) \n"+prototypeObj.constructor);
console.log("Finding constructor for `hello`: \n"+hello.__proto__.constructor);

// Changing the reference of the constructor
hello.__proto__.constructor=function change(){};
console.log("After changing the constructor reference: \n"+hello.__proto__.constructor);