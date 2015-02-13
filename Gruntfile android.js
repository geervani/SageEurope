/* global module, require, process */

var _           = require('lodash'),
	versionInfo = require('./lib/versions/version-info');


module.exports = function (grunt) {
	// Load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	// Displays the elapsed execution time of grunt tasks when done
	require('time-grunt')(grunt);

	var VERSION = versionInfo.getSnapshotVersion(),
		ICONS   = {
			dev: {
				mdpi: 'resources/img/drawable-mdpi/launcher-dev.png',
				hdpi: 'resources/img/drawable-hdpi/launcher-dev.png',
				xhdpi: 'resources/img/drawable-xhdpi/launcher-dev.png'
			},
			preprod: {
				mdpi: 'resources/img/drawable-mdpi/launcher-preprod.png',
				hdpi: 'resources/img/drawable-hdpi/launcher-preprod.png',
				xhdpi: 'resources/img/drawable-xhdpi/launcher-preprod.png'
			},
			stable: {
				mdpi: 'resources/img/drawable-mdpi/launcher-stable.png',
				hdpi: 'resources/img/drawable-hdpi/launcher-stable.png',
				xhdpi: 'resources/img/drawable-xhdpi/launcher-stable.png'
			},
			prod: {
				mdpi: 'resources/img/drawable-mdpi/launcher.png',
				hdpi: 'resources/img/drawable-hdpi/launcher.png',
				xhdpi: 'resources/img/drawable-xhdpi/launcher.png'
			}
		};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// folder's name that containt all android's SDK
		pathToSdkFolder:'https://horizon-sage.azurewebsites.net/SCVAndroid/releases/debug/android/',
		// that variable containt the name of the current sprint exemple 'Sprint#12', 
		// if not defined it will return "Sprint_"
		sprintName:process.env.SCV_ANDROID_SPRINT_NAME || 'Sprint_',
		src: [
			'*.js',
			'app/**/*.js',
			'app/**/**/*.js',
			'resources/js/*.js',
			'!bootstrap.js'
		],
		//Html Build
		htmlbuild: {
			sprint: {
	            src: 'resources/htmlBuild/sprinttemplate/sprint.html',
	            dest: 'resources/htmlBuild/sprints/<%= sprintName %>.html',
	            options: {
					beautify: true,
					/* jshint -W101 */
		            data: {
	                    // Data to pass to templates
						title: '<%= sprintName %>',
						dateSprint: grunt.template.date(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT'),
						apkDev: '<%= pathToSdkFolder %><%= pkg.name %>-'+ versionInfo.getSnapshotVersion({'env':'dev'})+'.apk',
						nameAPKDev: versionInfo.getSnapshotVersion({'env':'dev'})+'.apk',
						apkPreprod: '<%= pathToSdkFolder %><%= pkg.name %>-'+ versionInfo.getSnapshotVersion({'env':'preprod'})+'.apk',
						nameAPKPreprod: versionInfo.getSnapshotVersion({'env':'preprod'})+'.apk',
						apkStable: '<%= pathToSdkFolder %><%= pkg.name %>-'+ versionInfo.getSnapshotVersion({'env':'stable'})+'.apk',
						nameAPKStable: versionInfo.getSnapshotVersion({'env':'stable'})+'.apk',
						apkProd: '<%= pathToSdkFolder %><%= pkg.name %>-'+ versionInfo.getSnapshotVersion({'env':'prod'})+'.apk',
						nameAPKProd: versionInfo.getSnapshotVersion({'env':'prod'})+'.apk'
					}
					/* jshint +W101 */
		        }
	        },
	        dist: {
	            src: 'resources/htmlBuild/html/scvandroid.html',
	            dest: 'resources/htmlBuild/dist/',
	            options: {
					beautify: true,
		            sections: {
						views: 'resources/htmlBuild/sprints/*.html'
		            }
		        }
	        }
	    },

	    //upload build sur serveur ftp
		ftp_push: {
			build: {
				options: {
					authKey: 'serverA',
					host: 'waws-prod-am2-003.ftp.azurewebsites.windows.net',
					dest: '/site/wwwroot/scvandroid/',
					port: 21
				},
				files: [
					{
						expand: false,
						cwd: '.',
						src: [
							'resources/htmlBuild/dist/scvandroid.html',
							'releases/**/**/**'
						]
					}
				]
			}
		},
		// Do some cleaning, before the magic happens
		clean: {
			report: [
				'reports/*',
				'!reports/plato'
			],
			build: ['build', 'phonegap']
		},

		// Plato
		plato: {
			options: {
				title: '<%= pkg.title %>',
				jshint: grunt.file.readJSON('.jshintrc'),
				// Plato seems not to ignore files in a grunt style like. And causes a bug in the
				// report, as a workaround we ignore files by adding them to the `exclude` option.
				exclude: /Gruntfile.js|bootstrap.js/
			},
			report: {
				files: {
					'reports/plato': ['<%= src %>']
				}
			}
		},

		// JSHint
		jshint: {
			options: {
				force: true,
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'<%= src %>'
			],
			report: {
				options: {
					reporter: 'checkstyle',
					reporterOutput: 'reports/checkstyle.xml'
				},
				src: ['<%= src %>']
			}
		},

		// Sencha app build
		sencha_app_build: {
			options: {
				failOnWarn: false
			},
			build: {
				environment: 'package'
			}
		},

		/* jshint -W101 */
		// Package the application
		phonegap: {
			config: {
				root: 'build/package/SCV-<%= grunt.option("target") %>',
				cordova: 'resources/.cordova',
				config: {
					template: 'resources/custom_config.xml',
					data: {
						id: 'com.sage.scv',
						version: '<%= pkg.version %>',
						name: '<%= pkg.title %>',
						description: '<%= pkg.description %>'
					}
				},
				html: 'index.html', // (Optional) You may change this to any other.html
				path: 'phonegap',
				plugins: [
					'./plugins/AndroidManifestMerge',
					'./plugins/InAppBrowser',
					'./plugins/cordova-plugin-network-information',
					'./plugins/hermesandroidoauthplugin',
					'./plugins/cordova-plugin-splashscreen',
					'./plugins/Cordova-SQLitePlugin'
				],
				platforms: ['android'],
				maxBuffer: 200, // You may need to raise this for iOS.
				verbose: false,
				releases: 'releases',
				releaseName: VERSION,
				screenOrientation: 'userLandscape',
				debuggable: true,
				name: '<%= pkg.name %>', // Must be set for ios to work.
				// TODO:
				// Add a key if you plan to use the `release:android` task
				// See http://developer.android.com/tools/publishing/app-signing.html
				key: {
					store: 'release.keystore',
					alias: 'release',
					aliasPassword: function(){
						// Prompt, read an environment variable, or just embed as a string literal
						return('');
					}
				},
				storePassword: function () {
					// Prompt, read an environment variable, or just embed as a string literal
					return('');
				},

				// Set an app icon at various sizes (optional)
				icons: {
					android: {
						// ldpi: 'icon-36-ldpi.png',
						mdpi: 'resources/img/drawable-mdpi/launcher.png',
						hdpi: 'resources/img/drawable-hdpi/launcher.png',
						xhdpi: 'resources/img/drawable-xhdpi/launcher.png'
					}
					// wp8: {
					// 	app: 'icon-62-tile.png',
					// 	tile: 'icon-173-tile.png'
					// },
					// ios: {
					// 	icon29: 'icon29.png',
					// 	icon29x2: 'icon29x2.png',
					// 	icon40: 'icon40.png',
					// 	icon40x2: 'icon40x2.png',
					// 	icon57: 'icon57.png',
					// 	icon57x2: 'icon57x2.png',
					// 	icon60x2: 'icon60x2.png',
					// 	icon72: 'icon72.png',
					// 	icon72x2: 'icon72x2.png',
					// 	icon76: 'icon76.png',
					// 	icon76x2: 'icon76x2.png'
					// }
				},

				// Set a splash screen at various sizes (optional)
				// Only works for Android and IOS
				screens: {
					android: {
						// ldpi: 'resources/startup/splash.jpg',
						// landscape version
						// ldpiLand: 'resources/startup/426x320.png',
						// mdpi: 'resources/startup/splash.jpg',
						// landscape version
						mdpiLand: 'resources/startup/1280x800.png'
						// hdpi: 'resources/startup/splash.jpg',
						// landscape version
						// hdpiLand: 'resources/startup/640x480.png',
						// xhdpi: 'resources/startup/splash.jpg',
						// landscape version
						// xhdpiLand: 'resources/startup/960x720.png'
					}
					// ios: {
					// 	// ipad landscape
					// 	ipadLand: 'screen-ipad-landscape.png',
					// 	ipadLandx2: 'screen-ipad-landscape-2x.png',
					// 	// ipad portrait
					// 	ipadPortrait: 'screen-ipad-portrait.png',
					// 	ipadPortraitx2: 'screen-ipad-portrait-2x.png',
					// 	// iphone portrait
					// 	iphonePortrait: 'screen-iphone-portrait.png',
					// 	iphonePortraitx2: 'screen-iphone-portrait-2x.png',
					// 	iphone568hx2: 'screen-iphone-568h-2x.png'
					// }
				},

				// Android-only integer version to increase with each release.
				// See http://developer.android.com/tools/publishing/versioning.html
				vefilterrsionCode: 1,

				// Android-only options that will override the defaults set by Phonegap in the
				// generated AndroidManifest.xml
				// See https://developer.android.com/guide/topics/manifest/uses-sdk-element.html
				minSdkVersion: 17,
				targetSdkVersion: 19,

				// iOS7-only options that will make the status bar white and transparent
				iosStatusBar: 'WhiteAndTransparent'

				// If you want to use the Phonegap Build service to build one or more
				// of the platforms specified above, include these options.
				// See https://build.phonegap.com/
				// Available Platforms
				// ├── android
				// ├── blackberry
				// ├── iOS
				// ├── symbian
				// ├── webos
				// └── wp7
				// remote: {
				// 	username: 'your_username',
				// 	password: 'your_password',
				// 	platforms: [
				// 		'android'
				// 	]
				// },

				// Set an explicit Android permissions list to override the automatic plugin defaults.
				// In most cases, you should omit this setting. See 'Android Permissions' in README.md for details.
				// permissions: [
				// 	'INTERNET',
				// 	'ACCESS_NETWORK_STATE'
				// ]
			}
		},

		replace: {
			build_dev: {
				options: {
					patterns: [
						{
							match: /https:\/\/.+\.sage.fr/g,
							replacement: 'https://cloudbi-dev.sage.fr'
						},
						{
							match: /var platformParam.+;/g,
							replacement: 'var platformParam = "dev";'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/index.html'],
						dest: 'build/package/SCV-dev'
					},
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/resources/vendor/hermesjs/src/platform/android/authenticate.js'],
						dest: 'build/package/SCV-dev/resources/vendor/hermesjs/src/platform/android'
					}
				]
			},
			build_preprod: {
				options: {
					patterns: [
						{
							match: /https:\/\/.+\.sage.fr/g,
							replacement: 'https://cloudbi-preprod.sage.fr'
						},
						{
							match: /var platformParam.+;/g,
							replacement: 'var platformParam = "preprod";'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/index.html'],
						dest: 'build/package/SCV-preprod'
					},
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/resources/vendor/hermesjs/src/platform/android/authenticate.js'],
						dest: 'build/package/SCV-preprod/resources/vendor/hermesjs/src/platform/android'
					}
				]
			},
			build_prod: {
				options: {
					patterns: [
						{
							match: /https:\/\/.+\.sage.fr/g,
							replacement: 'https://hermes.sage.fr'
						},
						{
							match: /var platformParam.+;/g,
							replacement: 'var platformParam = "prod";'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/index.html'],
						dest: 'build/package/SCV-prod'
					},
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/resources/vendor/hermesjs/src/platform/android/authenticate.js'],
						dest: 'build/package/SCV-prod/resources/vendor/hermesjs/src/platform/android'
					}
				]
			},
			build_stable: {
				options: {
					patterns: [
						{
							match: /https:\/\/.+\.sage.fr/g,
							replacement: 'https://cloudbi-stable.sage.fr'
						},
						{
							match: /var platformParam.+;/g,
							replacement: 'var platformParam = "stable";'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/index.html'],
						dest: 'build/package/SCV-stable'
					},
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/resources/vendor/hermesjs/src/platform/android/authenticate.js'],
						dest: 'build/package/SCV-stable/resources/vendor/hermesjs/src/platform/android'
					}
				]
			},
			change_icons_path: {
				options: {
					patterns: [{
						match: /\/resources\/images/g,
						replacement: 'file:///android_asset/www/resources/images'
					}]
				},
				files: [{
					expand: true,
					flatten: true,
					src: ['build/package/SCV/resources/css/app.css', '/build/package/SCV/resources/css/testDemo.css'],
					dest: 'build/package/SCV-<%= grunt.option("target") %>/resources/css'
				}]
			},
			// Automaticaly use the sqliteAdapter from HermesJS for the packaged version of the app
			storage_adapter: {
				options: {
					patterns: [
						{
							match: /\.\/platform\/ios\/indexedstorage/g,
							replacement: './platform/android/sqliteAdapter'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten: true,
						src: ['build/package/SCV/resources/vendor/hermesjs/src/hermes.js'],
						dest: 'build/package/SCV-<%= grunt.option("target") %>/resources/vendor/hermesjs/src'
					}
				]
			},
			version_number: {
				options: {
					patterns: [{
						match: /"SCV_VERSION_FULL"/,
						replacement: VERSION
					}]
				},
				files : [{
					expand: true,
					flatten: true,
					src: ['build/package/SCV/app.js'],
					dest: 'build/package/SCV-<%= grunt.option("target") %>'
				}]
			}
		},

		concat: {
			options: {
				separator: ''
		    },
		    i18n_fr: {
				src: ['resources/strings/partial/STRINGS_FR.js','resources/strings/orig/fr/resources.resjson', 'resources/strings/partial/semiColon.js'],
				dest: 'resources/strings/virtual/fr.js'
		    },
			i18n_en: {
				src: [	'resources/strings/partial/STRINGS_EN.js','resources/strings/orig/en/resources.resjson', 'resources/strings/partial/semiColon.js'],
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

		copy: {
			build: {
				files: [{
					expand: true,
					cwd: 'build/package/SCV',
					src: '**',
					dest: 'build/package/SCV-<%= grunt.option("target") %>'
				}]
			}
		},

		// Manage the app version number
		bump: {
			options: {
				files: [
					'package.json',
					'bower.json'
				],
				updateConfigs: ['pkg'],
				commit: false,
				createTag: false,
				push: false
			}
		}
	});

	// Alias tasks
	grunt.registerTask('default', []);

	grunt.registerTask('report', [
		'clean:report',
		'plato:report',
		'jshint:report'
	]);

	grunt.registerTask('build', 'build:[dev|preprod|prod|stable]', function (env) {
		if (! _.contains(['dev', 'preprod', 'prod', 'stable'], env)) {
			grunt.fail.warn('The `build` task support only `dev`, `preprod`, `prod` or `stable` values.');
		} else {
			grunt.option('target', env);

			grunt.task.run([
				'clean:build',
				'sencha_app_build',
				'copy:build',
				'replace:build_' + env,
				'replace:change_icons_path',
				'replace:storage_adapter',
				'replace:version_number',
				'phonegap:build'
			]);
		}
	});

	grunt.registerTask('deploy', 'deploy:[dev|preprod|prod|stable]', function (env) {

		if (! _.contains(['dev', 'preprod', 'prod', 'stable'], env)) {
			grunt.fail.warn('The `deploy` task support only `dev`, `preprod`, `prod` or `stable` values.');
		} else {
			grunt.option('target', env);

			VERSION = versionInfo.getSnapshotVersion({
				env: grunt.option('target')
			});

			// override the current version string to include the targeted environment
			grunt.config.set('phonegap.config.releaseName', 'sagecustomerview-' + VERSION);
			grunt.config.set('replace.version_number.options.patterns', [{
				match: /"SCV_VERSION_FULL"/,
				replacement: VERSION
			}]);
			// Override the build icons according to the environement
			// console.log(grunt.config.get('phonegap.config.icons.android'));
			// console.log(ICONS[env]);
			grunt.config.set('phonegap.config.icons.android', ICONS[env]);

			grunt.config.set('phonegap.config.root', 'build/package/SCV-' + env);

			grunt.task.run([
				'build:' + env,
				'phonegap:debug:android'
			]);
		}

	});

	grunt.registerTask('sprint', function () {
		grunt.task.run([
			'deploy:dev',
			'deploy:preprod',
			'deploy:stable',
			'deploy:prod',
			'htmlbuild',
			'ftp_push'
		]);
	});
};
