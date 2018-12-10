interface Person{
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Programmer implements Person{
    firstName: string;
    lastName: string;
    getFullName():string{
        return this.firstName+' '+this.lastName;
    }
}

let person:Person=new Programmer();

let hacker={
    firstName:"Bibhuti",
    lastName:"Panda",
    getFullName: () => "Bibhuti Panda",
    dangerLevel: 3
}

// Duck typing
person=hacker; // can't access danger level
console.log(person.getFullName());