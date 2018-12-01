var person={
    "firstName":"Bibhuti",
    "lastName":"Panda",
    "getFullName":function(){
        /**
         * Assign person2=person
         * Do person={}
         * Do console.log(person2.getFullName());
         * It'll return undefined as we are hardcoding the variable(`person`)
         * return person.firstName+" "+person.lastName;
         */
        //return person.firstName+" "+person.lastName;
        return this.firstName+" "+this.lastName;
    }
}
var getFullName=person.getFullName();
console.log(getFullName);

person2=person
person={}
console.log(person2.getFullName());