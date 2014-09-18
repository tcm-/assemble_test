module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		assemble: {
			
		}
	});
	grunt.loadNPMTasks('assemble');
	grunt.loadNPMTasks('grunt-newer');
	grunt.registerTask('default', ['newer:assemble']);
};
