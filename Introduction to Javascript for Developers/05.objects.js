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

var newObj={
    "firstName":"Bibhuti",
    "lastName":"Panda",
    "details":{
        "age":"23",
        "gender":"male"
    }
};
console.log(newObj);
console.log("Accessing my middle name which I haven't defined gives result "+newObj["middleName"]);

// Accessing data of inner objects
console.log(newObj.details.age);
newObj.details.religion="hindu";
console.log(newObj);

// Deleting properties
delete newObj.details; // better than newObj.details = undefined
console.log(newObj);
// Note: Dots and brackets can be used interchangably and also together