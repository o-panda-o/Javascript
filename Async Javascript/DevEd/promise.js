console.clear();
console.log('Start');
console.log('Callbacks are not always asynchronous, e.g. forEach method also takes a callback');

const loginUser=(email,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userEmail:email});
        },2000)
        
    });
    
}

const getUserVideos=(email)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['video1','video2','video3']);
        },1000)
    });
    
}

const getVideoDetails=(video)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Title: '+video);
        },1000)
        
    });
}

loginUser("bibhuty.nit@gmail.com",123456)
    .then(user=>getUserVideos(user.userEmail))
    .then(videos=>getVideoDetails(videos[0]))
    .then(details=>console.log(details));


const youtube=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Getting stuffs from youtube');
        resolve({videos:['video1','video2','video3']})
    },1000)
});

const facebook=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Getting stuffs from facebook');
        resolve({photos:['photo1','photo2','photo3']})
    },1000)
});

Promise.all([youtube,facebook])
        .then(result=>console.log(result));
console.log('End');
