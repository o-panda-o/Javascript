"use strict"

// Set
let presentSetExample=false;
if(presentSetExample){
    let numbers=[1,1,2,2,3,4,5,6,7];
    let numberSet=new Set(numbers);
    numberSet.add(8);
    numberSet.add(6);
    numberSet.add({
        x:1,
        iy:2
    })
    numberSet.delete(8);
    console.log(numberSet);
    numberSet.forEach(function(val){
        console.log(val);
    })
    numberSet.clear();
    console.log("After clearing out all elements the set size is "+numberSet.size);
    console.log(numberSet);
}

// Map
let presentMapExample=false;
if(presentMapExample){
    let numberMap=new Map([
        ['1','one'],
        ['2','two'],
        ['3','three']
    ]);
    numberMap.set('4','four');
    console.log(numberMap);
}

// WeakSet
let presentWeakSetExample=false;
if(presentWeakSetExample){
    let carWeakSet=new WeakSet();
    let car1={
        make:'Honda',
        model:'Civic'
    };
    let car2={
        make:'Toyota',
        model:'Etios'
    };
    carWeakSet.add(car1);
    carWeakSet.add(car2);
    carWeakSet.delete(car2);
    console.log(carWeakSet);
}

// WeakMap
let presentWeakMapExample=true;
if(presentWeakMapExample){
    let carWeakMap=new WeakMap();
    let car1={
        make:'Honda',
        model:'Civic'
    };
    let key1={
        id:1
    };
    carWeakMap.set(key1,car1);
    console.log(carWeakMap);
}