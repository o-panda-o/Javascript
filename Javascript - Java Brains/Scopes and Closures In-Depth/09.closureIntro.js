var a=10;
function outer(){
    var b=20;
    var inner=function(){
        ++a;
        ++b;
        console.log(a);
        console.log(b);
    }
    return inner;
}
var innerFn=outer();

// The function remembers the scope 
// So no matter where you execute, it'll execute 
// pointing to the scope
innerFn();

// Think about the function flow and 
// also take care why outer() is not
// garbage collected
var innerFn2=outer();
innerFn2();