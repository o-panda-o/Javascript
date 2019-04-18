// Factory function
function createCircle(radius){
    return {
        radius, // In ES6 we don't need key value pair to do the same if the key and value have same name
        draw: function(){
            console.log('Drawing a circle');
        }
    }
}

const circle=createCircle(1);
circle.draw();

// Constructor function
function Circle(radius){
    console.log('this',this);
    this.radius=radius;
    this.draw=function(){
        console.log('Draw from constructor');
    }
    // return this -- It is irrelevant and redundant as it is done automatically
}
/**
 * Without even `new` keyword the work could be done but it'll
 * refer to the global object which could be changed by any piece
 * of code by putting a bug in our code. 
 * 
 * Using the `new` keyword does 3 things:
 *  1. It'll create an empty object(which is global when new is not used)
 *  2. It'll set `this` to point to that object
 *  3. It'll return the object from the function(similar to adding `return this` at the end)
 */
const another=new Circle(1);

/**
 * To have an idea of constructor property go to the console
 * and write
 *  1. circle.constructor(Uses built-in constructor to do the job)
 *  2. another.constructor
 * and see the difference how they work
 */