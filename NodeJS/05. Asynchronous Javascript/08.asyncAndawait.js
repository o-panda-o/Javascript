console.log('Before');
/*
getUser(1)
    .then(user => getRepositories(user.github))
        .then(repos => getCommits(repos[0]))
            .then(commits => console.log('Commits:',commits))
                .catch(err => console.log('Error:',err.message));
*/
async function displayCommits(){
    try{
        const user=await getUser(1);
        const repos=await getRepositories(user.github);
        const commits=await getCommits(repos[0]);
        console.log(commits);
    }catch(err){
        console.log('Error:',err.message);
    }
};
displayCommits();

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
            /*
            resolve(
                ['repo1','repo2','repo3']
            );
            */
            reject(new Error('Couldn\'t get the repos'));
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