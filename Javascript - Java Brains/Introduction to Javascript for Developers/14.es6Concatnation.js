/**
 * - var is depreceated in ES6 so better to use let
 * - also if we want to make an unchangable variable better to use const. 
 */
let firstName='Bibhuti';
let lastName='Panda';

const fullName=`${firstName} ${lastName}`;

console.log(fullName);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split(' '));
console.log(fullName.split(''));