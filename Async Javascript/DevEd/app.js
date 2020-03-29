console.clear();
console.log('Start');
const getLoginUser=(email,password)=>{
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

const displayVideo=async ()=>{
    try{
        const loginUser=await getLoginUser("bibhuty.nit@gmail.com",123456);
        const videos=await getUserVideos(loginUser.email);
        const videoDetails=await getVideoDetails(videos[0]);
        console.log(videoDetails);
    }catch(err){
        console.log('Could not get the videos ',err);
    }
}

displayVideo();

console.log('End');
