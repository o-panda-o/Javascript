var emp1={};
emp1.firstName="Bibhu";
emp1.lastName="Pandu";
emp1.gender="Male";
emp1.desingnation="Waiter";

emp2={};
emp2.firstName="Bibhuti";
emp2.lastName="Panda";
emp2.gender="Male";
emp2.desingnation="Manager";

/**
 * One of the way of creation of object
 */
function createEmployeeObject(firstName, lastName, gender, desingnation){
    var newEmp={};
    newEmp.firstName=firstName;
    newEmp.lastName=lastName;
    newEmp.gender=gender;
    newEmp.desingnation=desingnation;
    return newEmp;
}
var emp3=createEmployeeObject("Sangita","Mahapatra","Female","Waitress");
console.log(emp1);
console.log(emp2);
console.log(emp3);
