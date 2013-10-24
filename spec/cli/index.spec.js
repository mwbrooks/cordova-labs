/*!
 * Module dependencies.
 */

var cli = require('../../lib/cli'),
    hastings = require('../../lib/hastings'),
    argv;

/*!
 * Specification: CLI Module.
 */

describe('cli.exec(argv)', function() {
    beforeEach(function() {
        argv = ['node', '/usr/local/bin/hastings'];
        spyOn(hastings, 'render');
    });

    it('should use undefined when no path is given', function() {
        cli.exec(argv);
        expect(hastings.render).toHaveBeenCalledWith({});
    });

    it('should use the path when a path is given', function() {
        argv.push('lib/hastings');
        cli.exec(argv);
        expect(hastings.render).toHaveBeenCalledWith({
            path: 'lib/hastings'
        });
    });
});
