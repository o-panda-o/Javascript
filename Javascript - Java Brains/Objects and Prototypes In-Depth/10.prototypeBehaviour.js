function Employee(name){
    this.name=name;
    /*
    this.playPrank=function(){
        console.log("Prank played");
    }
    */
};


/**
 * Better to create a function in prototype than 
 * inside it as it is memory efficient.
 */
console.log(Employee.prototype);
Employee.prototype.playPrank=function(){
    console.log("Prank played");
};
console.log(Employee.prototype);

var emp1=new Employee("Bibhuti");
var emp2=new Employee("Bonty");
/**
 * Both the employee object can access the `playPrank`
 * function without explicitly defining them in their
 * scope as it is already definied in the prototype 
 * of the function they are using to define themselves.
 */
console.log("Calling prototype functions inside the multiple employee objects");
emp1.playPrank()
emp2.playPrank()
