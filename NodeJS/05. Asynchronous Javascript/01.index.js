/**
 * Asynchronous or Non-blocking function(doesn't means multithreaded)
 * 
 * Restaurant analogy
 */
/*
console.log('Waiter takes order from first table and gives it to chef');

setTimeout(() => {
    console.log('First order is prepared and is served.')
},2000)

console.log('After giving the order to the chef, he takes the order from the second table.');
*/
console.log('Before');

const user=getUser(1);
console.log(user);

console.log('After');

function getUser(id){
    setTimeout(() => {
        console.log('Reading a user from a database');
        return{
            id:id,
            github:'o-panda-o'
        }
    },2000);
}