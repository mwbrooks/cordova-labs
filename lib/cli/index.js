/*!
 * Module dependencies.
 */

var optimist = require('optimist'),
    hastings = require('../hastings');

/**
 * CLI Entry-Point.
 *
 * Execute a set of commands from the command-line.
 *
 * @param {String} argv is the value of process.argv
 */

module.exports.exec = function(argv) {
    argv = optimist.parse(argv);
    hastings.render(argv._[2]);
};
