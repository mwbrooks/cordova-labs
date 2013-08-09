/*!
 * Module dependencies.
 */

var shell = require('shelljs'),
    path = require('path'),
    bin,
    options;

/*!
 * Specification: Shell execution.
 */

describe('$ hastings [options] commands', function() {
    beforeEach(function() {
        bin = 'node ' + path.resolve(path.join(__dirname, '..', '..', 'bin'));
        options = { silent: true };
        spyOn(process.stdout, 'write');
    });

    it('should exit okay', function() {
        var process = shell.exec(bin, options);
        expect(process.code).toEqual(0);
    });

    //it('should support no arguments', function() {
    //    var process = shell.exec(bin, { silent: true });
    //    expect(process.output).toMatch('Usage:');
    //});

    //it('should support commands', function() {
    //    var process = shell.exec(bin + ' version', { silent: true });
    //    expect(process.output).toMatch(/^\w+\.\w+\.\w+/);
    //});

    //it('should support options', function() {
    //    var process = shell.exec(bin + ' --version', { silent: true });
    //    expect(process.output).toMatch(/^\w+\.\w+\.\w+/);
    //});
});
