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

// Arrays(Udemy)
// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
