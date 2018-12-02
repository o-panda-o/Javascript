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
console.log(bicycle1);
bicycle1.inflateTires();
console.log(bicycle1);

var bicycle2=new Bicycle(50,20,4,30);
console.log(bicycle2);
bicycle2.inflateTires();
console.log(bicycle2);

