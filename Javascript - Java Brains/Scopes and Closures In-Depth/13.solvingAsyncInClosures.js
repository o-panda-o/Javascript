var i;

for(i=0;i<10;++i){
    (function(currentValueOf_i_){
        //var currentValueOf_i_=i; //use if you don't want to pass it as a parameter
        setTimeout(function(){
            console.log(currentValueOf_i_);
        },
        1000);
    })(i);
}