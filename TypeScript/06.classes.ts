export class Person{
    firstName: string;
    lastName: string;
    age: number;
    phone: string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName():string{
        return this.firstName+' '+this.lastName;
    }
    greet(){
        console.log("Hey Person");
    }
}
var person : Person;
person=new Person("Bibhuti","Panda");
person.age=23;
person.phone="+918895954926";
console.log(person.getFullName());

class Programmer extends Person{
    greet(){
        console.log("Hello World!");
    }
    greetLikeNormalPeople(){
        super.greet();
    }
}
var programmer:Person=new Programmer("Bibhuti","Bhusan");
programmer.greet();
// Will throw an error if programmer:Person is there
// programmer.greetLikeNormalPeople(); 
console.log(programmer.getFullName()); 