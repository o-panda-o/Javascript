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