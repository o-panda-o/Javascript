/**
 * Inspect both the compilation and interpretation step here
 * and find the final result.
 */
var a=10;

function outer(){
    var b=a;
    console.log(b);
    function inner(){
        //var b=20; // What will happen if b is declared here instead ?
        var c=b;
        console.log(c);
        var b=20;
    }
    inner();
}

outer(); 

/**
 * Inspect the following
 */
// console.log(d);
// d=10;