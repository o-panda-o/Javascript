// Main module
console.log(module); // infromation about module

// Importing a module and best practice is to store them in 
// a constant as it can't be changed, hence by making our app
// stable
const loggerModule=require('./02_01.loggerModule');

loggerModule.logger('Bibhuti');
/**
 * Note: 
 *  + If a single function is exported then we can use:
 *      ~ loggerModule('Bibhuti')
 */
