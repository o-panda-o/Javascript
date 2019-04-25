"use strict"

// Generators are functions that can be paused and resumed
// anytime you like

function* generator(){
    console.log('Hello');
    yield 'Yeild 1 Ran..';
    console.log('World');
    yield 'Yeild 2 Ran';
    return 'Returned'; // Without this yeild will always say false
};

var gen=generator();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());

var gen2=generator();
for(let g of gen2){
    console.log(g);
}