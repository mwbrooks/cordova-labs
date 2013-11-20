/*!
 * Module dependencies.
 */

var cli = require('../../lib/cli'),
    nodoc = require('../../lib/nodoc'),
    argv;

/*!
 * CLI specification.
 */

describe('cli.exec(argv)', function() {
  beforeEach(function() {
    argv = ['node', '/usr/local/bin/nodoc'];
    spyOn(nodoc, 'compile');
  });

  it('should call nodoc.compile', function() {
    cli.exec(argv);
    expect(nodoc.compile).toHaveBeenCalledWith(undefined);
  });

  it('should support a path argument', function() {
    argv.push('/some/path');
    cli.exec(argv);
    expect(nodoc.compile).toHaveBeenCalledWith('/some/path');
  });
});
