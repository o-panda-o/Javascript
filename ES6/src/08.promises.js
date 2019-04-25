"use strict"

// Immediately Resolved Promise
var myPromise=Promise.resolve('foo');
myPromise.then((res) => console.log(res));


// Getting data after 2 seconds from the promise
var newPromise=new Promise(function(resolve,reject){
    setTimeout(()=>resolve(4),2000);
});

newPromise.then((res)=>{
    res+=3;
    console.log(res);
});

// Getting API data in a promise
function getData(method,url){
    return new Promise(function(resolve,reject){
        var xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=function(){
            if(this.status>=200 && this.status<=300){
                resolve(xhr.response);
            }else{
                reject({
                    status:this.status,
                    statusText:xhr.statusText
                });
            }
        };
        xhr.onerror=function(){
            reject({
                status:this.status,
                statusText:xhr.statusText
            });
        };
        xhr.send();
    });
};
getData('GET','http://jsonplaceholder.typicode.com/todos')
    .then(function(data){
        let todos=JSON.parse(data);
        let output='';
        for(let todo of todos){
            output += `
            <li>
                <h3>${todo.title}</h3>
                <p>Completed: ${todo.completed}</p>
            </li>
            `;
        }
        document.getElementById('promise').innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    })