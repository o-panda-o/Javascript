/**
 * Make the manager inherit all the
 * functionality of an employee.
 */
function Employee(name){
    this.name=name;
}

Employee.prototype.getName=function(){
    return this.name;
}

function Manager(name,dept){
    this.name=name;
    this.dept=dept;
}

Manager.prototype.getDept=function(){
    return this.dept;
}

var emp=new Employee("Bibhu");
var mgr=new Manager("Bonty","Sales");
console.log(mgr.getDept());

// It'll throw an error
// console.log(mgr.getName());

console.log(mgr.__proto__.__proto__===Object.prototype);
mgr.__proto__.__proto__=Employee.prototype;
console.log(mgr.__proto__.__proto__===Object.prototype);
console.log(mgr.getName());
Employee.prototype.sayHello=function(){
    console.log("Hello");
}
mgr.sayHello()