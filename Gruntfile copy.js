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
};
