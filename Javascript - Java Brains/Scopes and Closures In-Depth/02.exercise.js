/**
 * What are the values of inner which will be
 * printed???
 */
var inner=50;
function foo(){
    var inner=20;
    console.log(inner);
}
foo();
console.log(inner);

/**
 * Wrap everything inside a function if you 
 * want to reduce its scope.(One of the many ways)
 */
function muFn(){
    var a=10;
    var b=10;
    console.log(a+b);
}

/**
 * What will be the output ?
 * Which value will it take local or global ?
 */
var name="Bibhuti";
function callName(name){
    console.log("Hello "+name);
}
callName("Bonty");