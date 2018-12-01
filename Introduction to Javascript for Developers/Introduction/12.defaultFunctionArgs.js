var add=function(){
    /**
     * NOTE: `argument` is an object not an array
     */
    console.log(arguments);
    //console.log(this);
    var i,sum=0;
    for(i=0;i<arguments.length;++i)
        sum+=arguments[i];
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8,9,0));
