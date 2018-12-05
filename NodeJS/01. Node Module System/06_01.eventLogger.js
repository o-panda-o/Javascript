const EventEmitter = require('events');
//const emitter=new EventEmitter();


var url='theefficientcodes.com';

class Logger extends EventEmitter{
    log(message){
        // Send HTTP message
        console.log(message);
    
        // Raised an event
        /**
         * 
         emitter.emit('messageLogged',{
            id:1,
            url:'theefficientcodes.org'
         });
         */
        this.emit('messageLogged',{
            id:1,
            url:'theefficientcodes.org'
        });
    }  
}
 

module.exports = Logger;