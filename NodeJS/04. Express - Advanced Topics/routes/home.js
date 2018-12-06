const express=require('express');
const router=express.Router();

const dbDebugger=require('debug')('app:db');

router.get('/',(req,res) => {
    // res.send('Hello World!!!');
    res.render('index',{
        title:'My Express App',
        message:'Hello World!!!'
    });
    dbDebugger('Connected to DB');
});

module.exports=router;