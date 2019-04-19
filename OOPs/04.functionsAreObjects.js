/**
 * Functions are generally objects in Javascript
 */
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('Draw');
    }
}

/**
 * A function is internally represnted as an Object, more
 * precisely a Function object.
 */
const another=new Circle(1);

console.log("This happens when we don't use `new` operator")
Circle.call(window,1);
console.log("This happens when we use `new` operator");
Circle.call({},1);
Circle.apply({},[1,2,3]);