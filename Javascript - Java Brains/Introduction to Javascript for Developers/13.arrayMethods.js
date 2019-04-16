/**
 * Array Methods:
 *  + push
 *  + pop
 *  + shift
 *  + unshift
 */
var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(numbers);
console.log(numbers.push(16));
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.shift());
console.log(numbers);
console.log(numbers.unshift(1));
console.log(numbers);

var getElement=function(item){
    console.log("For an element "+item);
};
numbers.forEach(getElement);

/**
 * array.forEach(function(item,index,array){})
 */

 // Array behaviour
 let example1=[1,2,3];
 let example2=example1;
 console.log('Printing contents of second example -- '+example2);
 example2.push(4,5,6);
 console.log('Changing of second example affects first one -- '+example1);
 let example3=[...example1]; // ES6 syntax
 example3.push(7,8,9);
 console.log('Printing content of example 3 after taking the values from example 1 -- '+example3);
 console.log('No changes in example 1 after changing example 3 -- '+example1);
let example4=example1.map((element)=>{
    return element;
});
console.log('After copying each and every content of example 1 to 4 -- '+example4);