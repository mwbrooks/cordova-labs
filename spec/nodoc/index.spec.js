/*!
 * Module dependencies.
 */

var dir = require('node-dir'),
    nodoc = require('../../lib/nodoc'),
    fs = require('fs'),
    options;

/*!
 * nodoc specification.
 */

describe('nodoc.compile(path)', function() {
  beforeEach(function() {
    options = '/some/path';
    spyOn(dir, 'paths');
  });

  describe('path parameter', function() {
    it('should not be required', function() {
      expect(nodoc.compile).not.toThrow();
    });

    it('should default cwd', function() {
      nodoc.compile();
      expect(dir.paths).toHaveBeenCalledWith(
        process.cwd(),
        jasmine.any(Function)
      );
    });

    it('should be supported', function() {
      nodoc.compile(options);
      expect(dir.paths).toHaveBeenCalledWith(
        options,
        jasmine.any(Function)
      );
    });
  });

  describe('markdown parser', function() {
    beforeEach(function() {
      dir.paths.andCallFake(function(path, callback) {
        callback(null, { files: [
          '/some/path/file-1.md',
          '/some/path/file-2.md',
          '/some/path/file-3.md'
        ]});
      });
      spyOn(fs, 'readFileSync').andReturn('# Markdown');
      spyOn(nodoc, 'markdown');
    });

    it('should be called for each file', function() {
      nodoc.compile(options);
      expect(nodoc.markdown.calls.length).toEqual(3);
    });
  });
});
