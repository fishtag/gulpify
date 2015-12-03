#!/usr/bin/env node
require('coffee-script/register');

var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));

var cli = new Liftoff({
    name: 'octavius'
});

// Exit with 0 or 1
var failed = false;
process.once('exit', function(code) {
    if (code === 0 && failed) {
        process.exit(1);
    }
});

if (argv.v || argv.version) {
    var pjson = require('../package.json');
    console.log(pjson.version);
    process.exit(0);
}

process.nextTick(function() {
    Octavius = require('../octavius/octavius');
    Octavius.start();
});