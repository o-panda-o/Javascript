function authenticate(req,res,next){
    console.log('Authenticating...');
    // If we don't call it our req will keep on hanging
    next();
}

module.exports.authenticate=authenticate;