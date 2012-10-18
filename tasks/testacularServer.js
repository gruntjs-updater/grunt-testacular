
module.exports = function(grunt) {
  var server, _;
  server = require('testacular').server;
  _ = grunt.utils._;
  return grunt.registerMultiTask('testacularServer', 'Starts up a testacular server.', function() {
    var done;
    done = this.async();
    return server.start(this.data, function(exitCode) {
      if (exitCode > 0) {
        return done(false);
      }
    });
  });
};
