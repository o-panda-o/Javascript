/**
 * + Name normal functions in camel-case.
 * + Name other functions in first letter as Uppercase one.
 */
var bicycle={
    "cadence":50,
    "speed":20,
    "gear":4
};

function createBicycle(cadence,speed,gear){
    // var this={} // if we call as new this is added
    var newBicycle={};
    newBicycle.cadence=cadence;
    newBicycle.speed=speed;
    newBicycle.gear=gear;
    return newBicycle;
    // return this; // if we call as new this is added
}


function Bicycle(cadence,speed,gear){
    // var this={}
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    // return this;
}
console.log(createBicycle(50,4,3));
console.log(new createBicycle(50,4,3)); // Still works since adding `this` won't affect anything
console.log(Bicycle(50,4,3)); // Won't work as no `this` is added in this case
console.log(new Bicycle(50,4,3));