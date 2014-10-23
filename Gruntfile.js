module.exports = function(grunt) {

  grunt.initConfig({
    qunit: {
      files: ['qunit_runner.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('test', ['qunit']);

};
