var i;
var print=function(){
    console.log(i); //referring to global
};
for(i=0;i<10;++i){
    //print();
    /**
     * Within 1 sec it executes the entire loop and the 
     * value of i becomes 10 at last and after 1 sec it 
     * takes the value of i from global having the value
     * 10 and runs the same value at the entire loop.
     */
    setTimeout(print,1000); 
}