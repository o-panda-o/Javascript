/*
 -- HTTP Requests
    + app.get();
    + app.post();
    + app.put();
    + app.delete();
*/
// Environment Setting
// process.env.NODE_ENV='production';
// process.env.DEBUG='app:startup,app:db';
process.env.DEBUG='app:*';
process.env.app_password='1234';


const startupDebugger=require('debug')('app:startup');
const config=require('config');
const helmet=require('helmet');
const morgan=require('morgan');
const express=require('express');

const logger=require('./middleware/logger');
const authenticator=require('./middleware/authenticator');
const courses=require('./routes/courses');
const home=require('./routes/home');



const app=express();

// Getting environment details(detection of environment)
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // Needed to be defined(production,test,development,...etc)
console.log(`app: ${app.get('env')}`);

// Setting view engine
app.set('view engine','pug');
app.set('views','./views'); //where you want to store your templates(default value is here)

// Express middlewares
app.use(express.json()); // middleware function(middleware-middleware)
app.use(express.urlencoded( {extended:true} )); // to get data in url encoded form(`extended:true` --for complex data)
app.use(express.static('public')); // to serve static content which are inside specified folder(`static`)

// Helmet middleware
app.use(helmet());

// Morgan middleware
if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled');
}

// Custom middlewares 
app.use(logger.log);
app.use(authenticator.authenticate);
app.use('/api/courses',courses);
app.use('/',home);

// Configuration
console.log('Application Name: '+config.get('name'));
console.log('Mail Server: '+config.get('mail.host'));
console.log('Mail Password: '+config.get('mail.password'));

/*
--------------LISTENING TO THE PORT----------------------
*/
const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})
