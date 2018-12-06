console.log('Before');

/*
getUser(1, (user) => {
    getRepositories(user.github,(repo) => {
        getCommits(repo,(commits) => {
                // CALLBACK HELL
        });            
    });
});
*/
/*
getUser(1, (user) => {
    getRepositories(user.github,(repo) => {
        getCommits(repo,displayCommits);      
    });
});
*/
/*
getUser(1, (user) => {
    getRepositories(user.github,getCommits);
});
*/
getUser(1,getRepositories);
function getRepositories(user){
    getRepositories(user.github,getCommits);
}
function getCommits(repo){
    getCommits(repo,displayCommits);   
}
function displayCommits(commits){
    console.log(commits);
}

console.log('After');
/*---------------------------------------------------------------------- */
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