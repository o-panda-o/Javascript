"use strict"
/**
 * One of the importance of arrow function is it uses lexical `this`
 * so we don't need to rename `this` to `that` or anything else.
 */

function prefixer(prefix){
    this.prefix=prefix;
}
// In ES5 or below we couldn't use this directly
// So we need to create a reference. 
/*
prefixer.prototype.prefixArray=function(arr){
    let that=this;
    return arr.map(function(x){
        console.log(that.prefix+x);
    });
};
*/

prefixer.prototype.prefixArray=function(arr){
    let that=this;
    return arr.map((x) => {
        console.log(this.prefix+x);
    });
};

let pre=new prefixer('Hello ');
pre.prefixArray(['Bibhuti','Bonty']);

let add=(x,y)=>x+y;
console.log(add(2,3));


