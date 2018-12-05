/*
 -- HTTP Requests
    + app.get();
    + app.post();
    + app.put();
    + app.delete();
*/
const Joi=require('joi'); // Returns a class
const express=require('express');
const app=express();

const courses=[
    {id:1, name:'Course 1'},
    {id:2, name:'Course 2'},
    {id:3, name:'Course 3'}
];

// To enable working with JSON objects
app.use(express.json());

/*
----------------GET--------------------
*/  

app.get('/',(req,res) => {
    res.send('Hello World!!!');
});

// Sometime it may happen that we may need to put all
// of them in a separate say `courses.js` file
app.get('/api/courses', (req,res) => {
    res.send(courses);
});

// Getting course by id
app.get('/api/courses/:id', (req,res) => {
    // res.send(req.params.id);
    let course=courses.find( c => c.id===parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with given id is not found');
    }else res.send(course);
});

// Getting by multiple parameters
app.get('/api/posts/:year/:months', (req,res) => {
    //res.send(req.params);
    //res.send(req.query);
    
});

/*
----------------POST----------------------
*/
app.post('/api/courses',(req,res) => {
    /*
    const schema={
        name: Joi.string().min(3).required()
    };

    const result=Joi.validate(req.body,schema);
    //console.log(result);
    
    if(result.error){
        // 400 : Bad Request
        // res.status(400).send(result.error);
        // Simplifying the error message(One of the way)
        res.status(400).send(result.error.details[0].message); 
        return;
    }*/
    const { error }=validateCourse(req.body); // `result.error` -- similar to  
    if(error){
        // 400 : Bad Request
        // res.status(400).send(result.error);
        // Simplifying the error message(One of the way)
        return res.status(400).send(error.details[0].message); 
        
    }
    const course={
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

/*
-------------------------------PUT----------------------------
*/
app.put('/api/courses/:id', (req,res) => {
    // Look up the course
    // If not exists, return 404
    let course=courses.find( c => c.id===parseInt(req.params.id));
    if(!course){
        return res.status(404).send('The course with given id is not found');
    }

    // Validate
    // If invalid, return 400
    const { error }=validateCourse(req.body); // `result.error` -- similar to  
    if(error){
        // 400 : Bad Request
        // res.status(400).send(result.error);
        // Simplifying the error message(One of the way)
        return res.status(400).send(error.details[0].message); 
        
    }
    
    // Update course
    course.name=req.body.name;
    // Return the updated course
    res.send(course);
});
/*
-------------------------DELETE------------------------
*/
app.delete('/api/courses/:id',(req,res) => {
    // Look up the course
    // Not existing, return 404
    let course=courses.find( c => c.id===parseInt(req.params.id));
    if(!course){
        return res.status(404).send('The course with given id is not found');
    }
    // Delete
    const index=courses.indexOf(course);
    courses.splice(index,1);

    // Return the same course
    res.send(course);
});

/*
--------------LISTENING TO THE PORT----------------------
*/
const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

/*
---------------FUNCTION TO VALIDATE COURSE---------------------
*/
function validateCourse(course){
    const schema={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);    
}