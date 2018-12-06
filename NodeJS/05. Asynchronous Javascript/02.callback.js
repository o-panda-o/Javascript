console.log('Before');

getUser(1, (user) => {
    console.log('User: ',user);
    getRepositories(user.github,(repositories) => {
        console.log('Repositories: ',repositories);
        getCommits(repositories,(commits) => {
            console.log('Commits: ',commits);
        })
    });
});

console.log('After');

function getUser(id,callback){
    setTimeout(() => {
        console.log('Reading a user from a database');
        callback({
            id:id,
            github:'o-panda-o'
        })//; It will be treated as function in this case
    },2000);
}

function getRepositories(username,callback){
    setTimeout(() => {
        console.log('Calling GiHub API...');
        callback(
            ['repo1','repo2','repo3']
        )
    },2000);
}
function getCommits(repo,callback){
    setTimeout(() => {
        console.log('Calling repositori\'s commits');
        callback(['commit'])
    },2000);
}