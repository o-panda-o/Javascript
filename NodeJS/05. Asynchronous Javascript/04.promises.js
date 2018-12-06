const promise=new Promise((resolve,reject) => {
    // Kick off some asynchronous work
    // ...
    // resolve(1);
    setTimeout(() => {
        // resolve(1); // pending => resolved, fulfilled
        reject(new Error('message')) // pending => rejected
    },2000);
    // reject(new Error('message'));
});
promise
    .then(result => console.log('Result:',result))
    .catch(error => console.log('Error:',error.message));