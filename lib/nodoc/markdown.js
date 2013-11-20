/*!
 * Module dependencies.
 */

var marked = require('marked'),
    path = require('path');

/**
 * nodoc markdown constructor.
 */

module.exports.init = function() {
  // configure markdown parser
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true
  });
};

/**
 * nodoc markdown file support tester.
 *
 * @param {String} filepath is the file to test.
 * @return {Boolean} true if the file is supported.
 */

module.exports.test = function(filepath) {
  return (['.md'].indexOf(path.extname(filepath)) >= 0);
};

/**
 * nodoc markdown parser.
 *
 * Parse the markdown file and return HTML content.
 *
 * @param {String} text is the markdown content to parse.
 * @param {Function} callback is fired on completion.
 *   @param {Error} e is null unless there was an error.
 *   @param {String} html is the parsed HTML content.
 */

module.exports.parse = function(text, callback) {
  marked(text, callback);
};
