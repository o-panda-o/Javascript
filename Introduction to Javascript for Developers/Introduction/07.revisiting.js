/**
 * `===`
 */
var Obj1={
    "name":"Bibhuti"
};

var Obj2={

};

Obj2=Obj1;

console.log(Obj2.name);

if(Obj2===Obj1){
    console.log("Objects are equal");
}

/**
 * UNDEFINED VS NULL
 */

var myName={
    "firstName":"Bibhuti",
    "middleName":null,
    "lastName":"Panda"
};
console.log(myName.age);
console.log(myName.middleName);