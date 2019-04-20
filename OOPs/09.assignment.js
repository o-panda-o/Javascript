function Stopwatch(){
    let startTime,endTime,running,duration=0;
    this.start=function(){
        if(running){
            throw new Error('Stopwatch is already started');
        }
        running=true;
        startTime=new Date();
    };
    this.stop=function(){
        if(!running){
            throw new Error('Stopwatch is not running so can\'t stop the same');
        }
        running=false;
        endTime=new Date();
        const seconds=(endTime.getTime()-startTime.getTime())/1000;
        duration+=seconds;
    };
    this.reset=function(){
        duration=0;
        running=false;
        this.start();
    };
    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    });
}
let stopwatch=new Stopwatch();