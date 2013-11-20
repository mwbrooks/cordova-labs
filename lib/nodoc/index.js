/*!
 * Module dependencies.
 */

var async = require('async'),
    dir = require('node-dir'),
    fs = require('fs'),
    parser = require('./markdown'),
    path = require('path'),
    shell = require('shelljs');

/**
 * nodoc compiler.
 *
 * Compiles the documentation.
 *
 * @param {String} path is the documentation path.
 */

module.exports.compile = function(inputpath) {
  // default to current working directory
  inputpath = path.resolve(inputpath || process.cwd());

  // initialize the parser
  parser.init();

  // find all files
  dir.paths(inputpath, function(e, paths) {
    // iterate each file
    async.each(paths.files, function(filepath, callback) {
      if (parser.test(filepath)) {
        var text = fs.readFileSync(filepath, 'utf8');
        parser.parse(text, function(e, html) {
          if (e) {
            console.log('cp assets');
          }
          else {
            var outfile = path.join(__dirname, '..', '..', 'build', filepath.replace(inputpath, '').replace('.md', '.html'));
            var outpath = path.dirname(outfile);
            if (!fs.existsSync(outpath)) {
              shell.mkdir('-p', outpath);
            }
            fs.writeFileSync(outfile, html);
          }
        });
      }
      else {
        // console.log('cp assets');
      }
    });
  });
};
