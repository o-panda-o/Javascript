const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Couldn\'t connect to MongoDB...',err));

// creating the structure of a schema
const courseSchema=new mongoose.Schema({
    name: {
        type:String,
        required: true, // validator
        minlength:5,
        maxlength:255        
    },
    category:{
        type:String,
        required:true,
        enum:['web','mobile','network'] // ,
        // lowercase: false,
        // uppercase: false,
        // trim: true
    },
    author: String,
    tags:{
        type: Array,
        validate:{
            isAsync: true, // Asynchronous validator
            validator: function(v,callback){ // using callbacks for async validators
                setTimeout(() => {
                    // Do some async work
                    const result=v && v.length>0;// v is used to take care of `null`
                    callback(result);
                },4000);
            },
            message: 'A course should have at least one tag.'
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean,
    price:{
        type: Number,
        required: function(){
            return this.isPublished;
        }, //conditional validation
        min:10,
        max:100,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

// schema compiled to model(class)
const Course=mongoose.model('Course',courseSchema);


/* ---------------------------------------------CRUD-------------------------------- */
// Creation of a course
async function createCourse(){
    const course=new Course({
        name:'Angular.js Course',
        category:'-', //'web',
        author:'Bibhuti',
        tags:null,//['angular','frontend'],
        isPublished: true,
        price:15
    });

    try{
        // manually triggering validation
        // await course.validate();
        const result=await course.save();
        console.log(result);
    }catch(ex){
        // console.log(ex.message);
        for(field in ex.errors){
            console.log(ex.errors[field].message);
        }
    }
};

// Reading a course 
async function getCourses(){
    // Pagination constants
    const pageNumber=1;
    const pageSize=10;
    const courses=await Course

        // .find({price: {$gt:10, $lt:20}}) // Comparison operator
        // .find({price: {in:[10, 15, 20]}}) // Comparison operator
    
        // .find() // Support for logical operators
        // .or({author:'Bibhuti'},{isPublished:true}) // Logical Operators
    
        .find({ author:'Bibhuti', isPublished:true })
        .skip((pageNumber-1)*pageSize) // Pagination
        .limit(pageSize)
        .sort({name:1})
        .select({name:1, tags:1});
        // .count(); // To count the number of records
    console.log(courses);
};

// Updating a course
async function updateCourse(id){
    // Approach: Query first
    // findById()
    // Modify its properties
    // save()
    /*
    const course=await Course.findById(id);
    if(!course)return;
    //course.isPublished=true;
    //course.author='Bibhuti Bhusan';
    course.set({
        isPublished:true,
        author:'Bibhuti Bhusan'
    });
    const result=await course.save();
    console.log(result);
    */
    // Approach: Update first
    // Update directly
    // Optionally: get the updated course
    /*
    const result=await Course.update({_id:id},{
        $set:{
            author:'Bibhuti Panda',
            isPublished:false
        }
    });
    console.log(result);
    */
    const course=await Course.findByIdAndUpdate(id,{
        $set:{
            author:'Bibhuti Bhusan',
            isPublished:true
        }
    },{new:true}); // new:true is passed to get the value of the updated doc
    console.log(course);
}

// Deleting a course
async function removeCourse(id){
    // const result=await Course.deleteOne({_id:id});
    // console.log(result);
    const course=await Course.findByIdAndDelete(id);
    console.log(course);
}
// removeCourse('5c0a9a60e0802801cca9e298');
// updateCourse('5c0a9a60e0802801cca9e298');
// getCourses();
createCourse();