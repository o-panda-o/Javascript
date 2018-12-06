// Creating setteled promises

const resolved=Promise.resolve({id:1});
resolved.then(result => console.log(result));

const rejected=Promise.reject(new Error('Custom rejection reason'));
rejected.catch(error => console.log(error));