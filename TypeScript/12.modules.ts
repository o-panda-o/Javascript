/**
 * When you are importing something, you are basically
 * executing that file. That's why anything inside it'll
 * execute and show the result. So be careful what you are
 * importing.
 */
import { Person } from "./06.classes";

class Admin extends Person{

}

class Manager extends Person{

}

let admin=new Admin('Admin','User');

let manager=new Manager('Manager','User');

function personEcho<T extends Person>(person: T): T{
    return person;
}
