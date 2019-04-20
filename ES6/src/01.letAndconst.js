"use strict"

/**
 * var has a global scope, it means that it can be
 * declared anywhere and used anywhere.
 */
function testVar(){
    var at='outside at';
    if(at){
        var at='inside at';
        console.log(at);
    }
    console.log(at);
}
testVar();

/**
 * let has a local scope, it could only be used inside
 * the scope in which it is declared in. 
 */
function testLet(){
    let _at='outside _at';
    if(_at){
        let _at='inside _at';
        console.log(_at);
    }
    console.log(_at);
}
testLet();

/**
 * const means once you have done declaring it, you really
 * can't change it.  
 */
const colors=[];
colors.push('RED');
colors.push('BLUE');
console.log(colors);
