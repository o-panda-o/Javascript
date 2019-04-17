/**
 * Objects:
 *  + Free form
 *  + Literal notation to create objects
 *  + Properties can be accessed directly
 *  + New properties can be added directly
 *  + They can have methods
 *  + They can be accessed using `.` and `[]` notations
 */
// Creation of object
var myObj={};
console.log(myObj);

// Adding property to objects dynamically
// Think it as a map, rather than as a class
myObj.prop="Hello";
console.log(myObj);

myObj.prop2=123;
console.log(myObj);


console.log("The number property is "+myObj.prop2);

// This can also work without having quotes in keys
var newObj={
    "firstName":"Bibhuti",
    "lastName":"Panda",
    "details":{
        age:"23",
        gender:"male"
    }
};
console.log(newObj);
console.log("Accessing my middle name which I haven't defined gives result "+newObj["middleName"]);

// Accessing data of inner objects
console.log(newObj.details.age);
newObj.details.religion="hindu";
console.log(newObj);
console.log(Object.keys(newObj)); // Printing all keys 
console.log(Object.values(newObj)); // Printing all values


// Deleting properties
delete newObj.details; // better than newObj.details = undefined
console.log(newObj);
// Note: Dots and brackets can be used interchangably and also together

// Objects are pass-by-reference
let obj={
    company:"XYZ"
};
let obj1=obj;
obj1.tag="XYZ Tag";
console.log(obj);
console.log(obj1);