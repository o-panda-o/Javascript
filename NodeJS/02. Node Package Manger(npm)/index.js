var _ = require('underscore');
// `_` will resolve module like this:
// Core Module(if not)
// File or folder
// node_module

result=_.contains([1,2,3],2);
console.log(result);