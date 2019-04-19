/**
 * Hide implementation details and show only 
 * the info that is needed. Analogous to a 
 * DVD player.
 * 
 * Hide the details, show the essentials.
 */

function Circle(radius){

    // Private or locally accessible
    // The scope of these variables are in the closure of
    // the underlying function.
    let defaultLocation={
        x:0,
        y:0
    };

    let computeOptimumLocation=function(){

    }

    // Way of accessing private entities
    this.getDefaultLocation=function(){
        defaultLocation;
    }

    // Globally accessible
    this.radius=radius;

    this.draw=function(){
        computeOptimumLocation();
        console.log('Drawing a circle with radius '+this.radius);
    };

    // Defining getters and setters
    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y){
                throw new Error('Invalid location');                
            }
            defaultLocation=value;
        }
    });

};

const circle=new Circle(10);
circle.draw();
console.log(circle.getDefaultLocation());
circle.defaultLocation={
    x:1,
    y:1
};
// It'll throw an error
// circle.defaultLocation=1;
console.log('The default location of circle is ('+circle.defaultLocation.x+','+circle.defaultLocation.y+')');

