"use strict"
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    register(){
        console.log(this.username+' is now registered');
    }
    static message(){
        console.log('Kindly read all the instructions before registering');
    }
}

let Bibhuti=new User('bibhuti','bibhuty.nit@gmail.com','password');
Bibhuti.register();
User.message();

class Member extends User{
    constructor(username,email,password,memeberPackage){
        super(username,email,password);
        this.package=memeberPackage;
    }
    getPackage(){
        console.log(this.username+' is subscribed to '+this.package);
    }
}
let Bonty=new Member('bonty','bibhuty.nit@gmail.com','password','standard');
Bonty.register();
Member.message();
Bonty.getPackage();