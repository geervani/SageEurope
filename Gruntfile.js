/* global module, require */

module.exports = function (grunt) {
	// Load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	// Displays the elapsed execution time of grunt tasks when done
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		src: [
			'app.js',
			'resources/js/public-load-libs.js',
			'app/{,*/,*/*/}*.js'
		],

		// Do some cleaning, before the magic happens
		clean: {
			build: [
				'build',
				'reports/*',
				'!reports/plato'
			]
		},

		// JSHint
		jshint: {
			options: {
				force: true,
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= src %>'
			],
			build: {
				options: {
					reporter: 'checkstyle',
					reporterOutput: 'reports/checkstyle.xml'
				},
				src: ['<%= jshint.all %>']
			}
		},

		// Plato
		plato: {
			options: {
				title: '<%= pkg.title %>',
				jshint: grunt.file.readJSON('.jshintrc')
			},
			build: {
				files: {
					'reports/plato': ['<%= src %>']
				}
			}
		},

		// Sencha app build
		sencha_app_build: {
			build: {
				environment: 'production'
			}
		},

		// Resize Icons and Splash-Screens
		multiresize: {
			splash: {
				src: 'resources/startup/2048x1496.png',
				dest: ['resources/startup/1024x748.png'],
				destSizes: ['1024x748']
			}
		},

		concat: {
			options: {
		    	separator: '',
		    },
			i18n_fr: {
				src: ['resources/strings/partial/STRINGS_FR.js','resources/strings/orig/fr/resources.resjson', 'resources/strings/partial/semiColon.js'],
				dest: 'resources/strings/virtual/fr.js'
			},
			i18n_en: {
				src: ['resources/strings/partial/STRINGS_EN.js','resources/strings/orig/en/resources.resjson', 'resources/strings/partial/semiColon.js'],
				dest: 'resources/strings/virtual/en.js'
			},
			i18n_es: {
				src: ['resources/strings/partial/STRINGS_ES.js','resources/strings/orig/es/resources.resjson', 'resources/strings/partial/semiColon.js'],
				dest: 'resources/strings/virtual/es.js'
			},
			i18n_de: {
				src: ['resources/strings/partial/STRINGS_DE.js','resources/strings/orig/de/resources.resjson', 'resources/strings/partial/semiColon.js'],
				dest: 'resources/strings/virtual/de.js'
			}
		},
		
	});

	// Alias tasks
	grunt.registerTask('default', []);
	grunt.registerTask('ci-checks', ['jshint', 'plato']);
	grunt.registerTask('BumpBuild', function() {		
	var file = grunt.config('pkgFile') || 'package.json';
	var pkg = grunt.file.readJSON(file);
	var newBuild = parseInt(pkg.build) + 1;
	
	grunt.log.write('Building '+pkg.name+' '+pkg.version+' build '+pkg.build).ok();
	
	pkg.build = newBuild;
	grunt.file.write(file, JSON.stringify(pkg, null, '  ') + 'n');
});
grunt.registerTask('build', function(os,release){
	var usage = "Usage: grunt build:[os]:[release] [--package]?";
	if(os == null){
		grunt.log.error(usage);
		grunt.fail.fatal("Operating System not provided");
	}
	if(release == null){
		grunt.log.error(usage);
		grunt.fail.fatal("Release not provided");
	}
	
	if(os != "blackberry" && os != "android" && os != "ios" && os != "winphone"){
		grunt.fail.fatal("Operating System not valid");
	}
	
	if(release != "alpha" && release != "beta" && release != "release"){
		grunt.fail.fatal("Release not valid");
	}
	
	grunt.log.write("Building for "+os+" "+release+"...").ok();
	grunt.config.set("pkg.platform",os);
	
	switch(os){
		case "blackberry":				
			grunt.task.run(['BumpBuild','string-replace:config','string-replace:blackberry','string-replace:'+release,'parentfilerewrite:blackberry','compress']);
			break;
		case "android":
			grunt.task.run(['BumpBuild','string-replace:config','string-replace:android','string-replace:'+release,'parentfilerewrite:android','compress']);
			break;
		case "ios":
			grunt.task.run(['BumpBuild','string-replace:config','string-replace:ios','string-replace:'+release,'parentfilerewrite:ios','compress']);
			break;
		case "winphone":
			grunt.task.run(['BumpBuild','string-replace:config','string-replace:winphone','string-replace:'+release,'parentfilerewrite:winphone','compress']);
			break;
	}
	
	//Package it up using webworks or Phonegap Build
	if(grunt.option('package')){
		if(os == "blackberry"){
			grunt.log.write("Packaging using Webworks...").ok();
			grunt.task.run(['exec:bbwp']);
		} else {
			grunt.log.write("Packaging using Phonegap Build...").ok();
			grunt.task.run(['phonegap-build:'+release]);
		}
	} else {
		grunt.log.write("Not Packaging").ok();
	}
});
};
