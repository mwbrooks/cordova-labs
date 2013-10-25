/*!
 * Module dependencies.
 */

var marked = require('marked'),
    async = require('async'),
    path = require('path'),
    dir = require('node-dir');

/*!
 * Hastings module.
 */

module.exports = {

    /**
     * Render the documentation.
     *
     * @param {Object} [options]
     * @param {String} [options.path] is the input source path.
     */
    render: function(options) {
        // resolve path with default as current working directory
        options = options || {};
        options.path = path.resolve(options.path || process.cwd());

        // find all files in the path
        dir.paths(options.path, function(e, paths) {
            if (e) throw (e);

            // configure markdown parser
            marked.setOptions({
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true
            });

            // handle each file
            async.each(paths.files, function(file, callback) {
                // if is markdown file
                // console.log(marked('i am using __markdown__.'));
                // otherwise copy
            });
        });
    }

};
