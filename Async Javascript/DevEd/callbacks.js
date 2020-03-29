console.clear();
console.log('Start');
console.log('Callbacks are not always asynchronous, e.g. forEach method also takes a callback');

const loginUser=(email,password,callback)=>{
    setTimeout(()=>{
        callback({userEmail:email}); // parameter of callback which we'll have access to when the data is returned
    },2000)
}

const getUserVideos=(email,callback)=>{
    setTimeout(()=>{
        callback(['video1','video2','video3']);
    },1000)
}

const getVideoDetails=(video,callback)=>{
    setTimeout(()=>{
        callback('Title: '+video);
    },1000);
}

// Callback hell
const user=loginUser("bibhuty.nit@gmail.com",123456,user=>{
    console.log(user);
    getUserVideos(user.userEmail,videos=>{
        console.log(videos);
        getVideoDetails(videos[0],videoDetail=>{
            console.log(videoDetail);
        })
    });
});
console.log('End');
