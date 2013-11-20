/*!
 * Module dependencies.
 */

var optimist = require('optimist'),
    nodoc = require('../nodoc');

/**
 * CLI execution.
 *
 * Execute a command from the command-line.
 *
 * @param {String} argv is the value of process.argv.
 */

module.exports.exec = function(argv) {
  // parse the arguments and compile with optional path
  argv = optimist.parse(argv);
  nodoc.compile(argv._[2]);
};
