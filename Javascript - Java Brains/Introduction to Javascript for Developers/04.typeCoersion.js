/**
 * '=='  -> they don't take care of types
 * '==='/'!==' -> they does take care of types
 */
if(1=="1"){
    console.log("Values are equal but can't be assured that they are of same type");
    if(1==="1"){
        console.log("Values are equal and of same type")
    }else{
        console.log("Values are same but not of the same type");
    }
}

/**
 * What are the values which coerse to 
 * `false` automatically.
 */
if(null || undefined || 0  || false){
    console.log("A non-zero value is passed");
}else {
    console.log("0 or null or undefined or false passed in `if` statement");
}