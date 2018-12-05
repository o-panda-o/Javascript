/**
 * Global Object:
 *  + Can be accessed across anywhere
 *  + Examples: 
 *      + console.log()
 *      + setTimeout()
 *      + clearTimeout()
 *      + setInterval()
 *      + clearInterval()
 *  + Unlike JS variables are not part of `global`(unlike `window`)
 * 
 */

 var message='Hey';
 console.log(global);
 console.log(global.message); // will throw undefined

