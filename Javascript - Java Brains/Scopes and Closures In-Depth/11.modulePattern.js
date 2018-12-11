function createPerson(){
    var firstName="Bibhuti";
    var lastName="Panda";
    var person={
        //"firstName":"Bibhuti",
        //"lastName":"Panda",
        "getFirstName":function(){
            return firstName;
        },
        "getLastName":function(){
            return lastName;
        },
        "setFirstName":function(name){
            firstName=name;
        },
        "setLastName":function(name){
            lastName=name;
        }
    };
    return person;
}

/**
 * The variable firstName and lastName can't be accessed directly.
 * Actually to use them we need to play with the closure of the 
 * return value as a function remembers everything inside it once 
 * it is declared. 
 */
var person=createPerson();
console.log(person.getFirstName());
person.setFirstName("Bibhu");
console.log(person.getFirstName());
console.log(person.getLastName());

