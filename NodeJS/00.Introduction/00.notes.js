/**
 * Node JS:
 *  + open-source, cross-platform runtime environment to run JS
 *    code outside the browser.
 *  + Used to build back-end service called APIs.
 *  + Ideal for building highly-scalable, data-intensive, real-time apps
 *  + Great for prototyping and agile env.
 *  + Superfast and highly scalable
 *  + v8 engine embedded inside C++ code: Node 
 *  + It is asynchronous(non-blocking) -- (waiter-kitchen analogy)
 *  + Single thread makes a request and goes to another process and monitors 
 *    an event queue continuously for completion of previous request. If an 
 *    event it done, it takes it our of that queue and process it. 
 *  + Ideal for disc and network-access apps.
 *  + Not ideal for CPU-intensive apps(as other clients have to wait a lot)
 */
function sayHello(name){
    console.log('Hello '+name);
};
sayHello('Bibhuti');
// It'll throw an error as it is not a browser
console.log(window);

// Functions of global scope
