// This is how node wraps up a file.
// So `require` is local, although it seems `global`
//(function (exports, require, module, __filename, __dirname){
    //var x=;
    console.log(__filename);
    console.log(__dirname);
    var url='theefficientcodes.com';

    function log(message){
        // Send HTTP message
        console.log(message);
    }

    // Export `log` as the name `logger` and `url` as `endPoint`
    module.exports.logger=log;
    module.exports.endPoint=url;

    /**
     * Note:
     *  + To export a single module we can do:
     *      ~ module.exports = log;
     */
//})