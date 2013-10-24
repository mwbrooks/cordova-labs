/*!
 * Module dependencies.
 */

var path = require('path'),
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
        });

        // render each file
    }

};
