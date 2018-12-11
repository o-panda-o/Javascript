/**
 * If you use var the scope will be global
 * but in case of let it is local to the block.
 * 
 * Also var can be redefined but let can't be redefined.
 * 
 * Javascript is function-scoped, means what happens inside
 * a function remains inside a function.
 */

var firstName="Bibhuti";
if(firstName==="Bibhuti"){
    var lastName="Panda";
    //let lastName="Panda";
}
console.log(firstName);
console.log(lastName);


function myMiddleName(){
    if(firstName==="Bibhuit"){
        var middleName="Bhusan";
    }
}
myMiddleName();
// console.log(middleName); // Will throw an error,as outside the scope