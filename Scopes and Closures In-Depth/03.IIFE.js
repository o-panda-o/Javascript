(function(){
   var name="Bibhuti";
   console.log(name+" is called inside an anonymous function.");
   console.log("This is a IIFE(Immidieately Invoked Function Expression)");
})();
// It'll give an error here
// console.log(a);

// If a variable is not declared then it'll throw an error during read operation
// console.log(foo);

// If a variable is not declared it won't do anything during its write operation
foo=10;
console.log(foo);
