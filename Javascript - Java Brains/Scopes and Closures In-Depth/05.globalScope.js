var a=10;
function myFn(){
    var b=a; 
    c=100; // writes `c` to the global scope
    console.log(b);
    console.log(c); // it'll throw an error if no c i
}
myFn();
console.log(c);