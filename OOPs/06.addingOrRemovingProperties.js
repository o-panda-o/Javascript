function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('Draw a circle');
    }
};
// Adding property in different ways(both . and [] notation)
const circle=new Circle(20);
circle.location={
    x:1
};
const propertyName='circle center';
circle[propertyName]={
    center: 'origin'
};


// Deleting property on the fly(both notations could be used)
delete circle[propertyName];