/*!
 * Module dependencies.
 */

var hastings = require('../../lib/hastings'),
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
            hastings.render();
            expect(dir.paths).toHaveBeenCalledWith(
                process.cwd(),
                jasmine.any(Function)
            );
        });
    });
});
