function log(req,res,next){
    console.log('Logging...');
    // If we don't call it our req will keep on hanging
    next();
};

module.exports.log=log;