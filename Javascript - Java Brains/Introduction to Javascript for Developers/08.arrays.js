var myArray=[1,2,3,4,5];
console.log(myArray);
console.log(myArray[4]);
console.log(myArray[500]);
myArray[500]=6; // take the length as 500
console.log(myArray[500]);
console.log(myArray);
// Finding length of the array
console.log(myArray.length);  // object.property type
console.log(typeof myArray);

// can't use `.` notation, so we have to use `[]` to get stuffs
myArray["name"]="Bibhuti"; // doesn't change the length so chose a number instead
console.log(myArray);// although it adds the value
console.log(myArray["length"]);

// array methods
myArray.push('A','B','C');
console.log(myArray);
myArray.pop();
console.log(myArray);