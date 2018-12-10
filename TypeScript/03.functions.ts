/**
 * All the optional argument should be at the 
 * end or else it'll throw an error at compile
 * time. 
 */
function add(a: number,b: number, c:number=0) : number{
    return a+b+c;
};
console.log(add(78,90));
console.log(add(78,90,20));
// add(10,"foo"); //It'll throw an error