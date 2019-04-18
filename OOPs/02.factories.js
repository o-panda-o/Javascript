// Factory function
function createCircle(radius){
    return {
        radius, // In ES6 we don't need key value pair to do the same if the key and value have same name
        draw: function(){
            console.log('Drawing a circle');
        }
    }
}