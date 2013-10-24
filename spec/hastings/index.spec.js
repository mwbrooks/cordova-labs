/*!
 * Module dependencies.
 */

var hastings = require('../../lib/hastings'),
    path = require('path'),
    dir = require('node-dir'),
    options;

/*!
 * Specification: hastings module.
 */

describe('hastings.render(path)', function() {
    beforeEach(function() {
        options = { path: 'docs' };
        spyOn(dir, 'paths');
    });

    describe('given no path', function() {
        it('should use current working directory', function() {
            options.path = undefined;
            hastings.render(options);
            expect(dir.paths).toHaveBeenCalledWith(
                process.cwd(),
                jasmine.any(Function)
            );
        });
    });

    describe('given a path', function() {
        it('should use the resolved path', function() {
            hastings.render(options);
            expect(dir.paths).toHaveBeenCalledWith(
                path.resolve(options.path),
                jasmine.any(Function)
            );
        });
    });
});
