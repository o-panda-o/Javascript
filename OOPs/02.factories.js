// Factory function
function createCircle(radius){
    return {
        radius, // In ES6 we don't need key value pair to do the same
        draw: function(){
            console.log('Drawing a circle');
        }
    }
}