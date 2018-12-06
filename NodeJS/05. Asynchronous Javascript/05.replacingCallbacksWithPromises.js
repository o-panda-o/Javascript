/*
getUser(1, (user) => {
    getRepositories(user.github,(repo) => {
        getCommits(repo,(commits) => {
            // CALLBACK HELL
            console.log(commits);
        });            
    });
});
*/
console.log('Before');

// const userPromise=getUser(1);
getUser(1)
    .then(user => getRepositories(user.github))
        .then(repos => getCommits(repos[0]))
            .then(commits => console.log('Commits:',commits))
                .catch(err => console.log('Error:',err.message));

console.log('After');

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database');
            resolve({
                id:id,
                github:'o-panda-o'
            });
        },2000);
    })
    
}

function getRepositories(username){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('Getting its github repositories...');
            resolve(
                ['repo1','repo2','repo3']
            );
        },2000);
    });
}

function getCommits(repo){
    return new Promise((resolve,reject) => {        
        setTimeout(() => {
            console.log('Calling the repositorie\'s commits');
            resolve(['commit']);
        },2000);
    });
}