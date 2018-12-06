/*
SINGLE THREADED OPERATION:
    + The moment one operation starts, it releases the lock in the thread,
      then immediately other one starts. 


 */
const call_FB_API=new Promise((resolve) => {
    setTimeout(() => {
        console.log('Calling Facebook API');
        resolve('FB');
        // add `reject` to function declaration in this case
        // reject(new Error('Something failed while calling Facebook API')); 
    },2000);
});

const call_Twitter_API=new Promise(resolve => {
    setTimeout(() => {
        console.log('Calling Twitter API');
        resolve('Twitter');
    },2000);
});
/**
 * Calls when everything is done
 */
/*
Promise.all([call_FB_API,call_Twitter_API])
    .then(result => console.log(result))
    .catch(err => console.log('Error:',err.message));
*/
/**
 * Calls immediately when someone is completed
 */
Promise.race([call_FB_API,call_Twitter_API])
    .then(result => console.log(result))
    .catch(err => console.log('Error:',err.message));