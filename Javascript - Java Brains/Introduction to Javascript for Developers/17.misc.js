/**
 * Other methods of console
 */

// console.table -- prints things in table format
console.table({a:1,b:2});

// console.error -- prints things in red
console.error("This is an error");

// console.warn -- prints things in yellow
console.warn("Something may be wrong");

// console.time and console.timeEnd gives the time it took to do something
console.time('Hello');
for(let i=0;i<100000;++i);
console.timeEnd('Hello');

// console.clear(); //clears the console

/**
 * Properties of const
 */
const person={
    name:'Bibhuti',
    age:24
};

const numbers=[1,2,3,4,5];
numbers.push(6); // numbers=[1,2,3,4,5,6] -- doing this will throw an error
// Reassigning const is not possible but you can change the contents
person.name='Bonty'; 

console.log(person);
console.log(numbers);
// The below will throw an error
// person=null;

/**
 * Loops:
 */

// For Each loop
numbers.forEach((number)=>{
    console.log(number);
});

numbers.forEach((number,index,array)=>{
    console.log(`${number} ${index} ${array}`);
});

// For In loop
for(number in numbers){
    console.log(number);
}

for(i in numbers){
    console.log(`${i} -- ${numbers[i]}`);
}

// Map
const users=[
    {id:1,name:"Bibhuti"},
    {id:2,name:"Bhusan"},
    {id:3,name:"Panda"}
];
const ids=users.map((user)=>{
    return user.id;
})
console.log(ids);