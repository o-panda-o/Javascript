function Bicycle(cadence, speed, gear, tirePressure){
    this.cadence=cadence;
    this.gear=gear;
    this.speed=speed;
    this.tirePressure=tirePressure;
    this.inflateTires=function(){
        this.tirePressure+=3; // this reference here is different than the outer functions
    }
}

var bicycle1=new Bicycle(50,20,4,25);


var bicycle2=new Bicycle(50,20,4,30);


function Mechanic(name){
    this.name=name;
}
var mike=new Mechanic("Mike");
mike.inflateTires=bicycle1.inflateTires;


console.log(bicycle1);
mike.inflateTires.call(bicycle1);
console.log(bicycle1);

console.log(bicycle2);
mike.inflateTires.call(bicycle2);
console.log(bicycle2);