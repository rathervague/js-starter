
// register babel
require('babel-register')();

// disable webpack feature
require.extensions['.css'] = function(){};
