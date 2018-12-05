/**
 * Event: 
 *  + Signal that something has happened
 */
const EventEmitter = require('events');
//const emitter=new EventEmitter();



const Logger=require('./06_01.eventLogger');
const logger=new Logger();
// Register a listener
logger.on('messageLogged',(e) => {
    console.log('Listener Called ',e);
})
logger.log('message');