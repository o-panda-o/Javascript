const posts=[
    {title:"Post One",body:"This is post one"},
    {title:"Post Two",body:"This is post two"}
];

getPosts=()=>{
    setTimeout(() => {
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
};

getPosts();

createPost=(post)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error=false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });    
};

init=async ()=>{
   await createPost({title: "Post Three",body:"This is post three"});
   getPosts();
};

init();

fetchUsers=async ()=>{
    const response=await fetch('http://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    console.log(data);
};

fetchUsers();