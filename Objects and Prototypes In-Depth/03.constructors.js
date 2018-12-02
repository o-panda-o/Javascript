/**
 * Using constructor to create an object
 * So no need for initialization and returning of object
 */
function createEmployeeObject(firstName, lastName, gender, desingnation){
    //var this={};
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.desingnation=desingnation;
    //return this;
}
var emp=new createEmployeeObject("Sangita","Mahapatra","Female","Waitress");
console.log(emp);