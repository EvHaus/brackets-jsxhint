/* global module */

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compress: {
			build: {
				options: {
					archive: 'build/brackets-jsxhint-<%= pkg.version %>.zip'
				},
				files: [{
					src: [
						'bower_components/jshint/dist/jshint.js',
						'bower_components/react/JSXTransformer.js',
						'config.js',
						'jshint/*',
						'main.js',
						'LICENSE',
						'NOTICE',
						'package.json',
						'README.md'
					],
					dest: '/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('build', ['compress']);
};