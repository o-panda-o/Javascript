function Employee(){};

var employee=new Employee();

console.log(Employee.prototype);
console.log(Employee.prototype.constructor);
console.log(employee.__proto__);
console.log(employee.__proto__.constructor);
console.log(Employee.prototype.__proto__);
console.log(Employee.prototype.__proto__.constructor);
console.log(employee.__proto__.__proto__===Object.prototype);
/**
 * If you put anything in the reference of the Object prototype
 * then everything can access it as it is at the topmost level
 * of everyone's scope.
 */