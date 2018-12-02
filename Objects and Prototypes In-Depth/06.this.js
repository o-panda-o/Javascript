/* Method 1 */
function sayHello(){
    console.log("Say Hello");
    console.log(this);
};
// sayHello(); 

/* Method 2 */
var object={"type":"object"};
object.sayHello=function(){
    console.log("Say Hello");
    console.log(this);
};
// object.sayHello();

/* Method 3 */
new sayHello(); // creates an empty object as per property of `new` 