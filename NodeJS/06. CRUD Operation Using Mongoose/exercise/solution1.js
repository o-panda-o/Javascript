// import the library
const mongoose=require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Couldn\'t connect to MongoDB...',err));

// schema to define the shape of document in courses collection
const courseSchema=new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});

// create a model for this schema
const Course=mongoose.model('Course',courseSchema);

// Get all the published backend courses and sort them by their name
async function getCourses(){
    return await Course
        .find({isPublished: true, tags:'backend'})
        .sort('name') 
        .select('name author');
};

async function run(){
    const courses = await getCourses();
    console.log(courses);
};

run();
