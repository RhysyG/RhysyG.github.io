module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	copy: {
		css : {
			files: {
				'_site/css/main.min.css': 'css/main.min.css',
			}
		},
		js : {
			files: {
				'_site/js/main.min.js': 'js/main.min.js',
			}
		}
	},

	sass: {
		dist: {
			options: {
				style: 'expanded'
			},
			files: {
				'css/main.min.css': 'css/main.scss',
			}
		}
	},

	uglify: {
		build: {
			src: ['js/main.js',
			'js/site-nav.js'],
			dest: 'js/main.min.js'
		}
	},

	autoprefixer: {
		dist: {
			files: {
				'css/main.min.css': 'css/main.min.css'
			}
		}
	},

	imagemin: {
		dynamic: {
			options: {
				optimizationLevel: 3
			},
			files: [{
				expand: true,
				cwd: 'img-src/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'img/'
			}]
		}
	},

	connect: {
		server: {
			options: {
				port: 9002,
				base: '.',
				livereload:true
			}
		}
	},

	jekyll: {
		dist: {
			options: {
				dest: '<%= dist %>',
				config: '_config.yml'
			}
		}
	},

	watch: {

		options: {
			livereload: true
		},

		css: {
			files: ['css/**/*.scss'],
			tasks: ['sass', 'autoprefixer', 'copy'],
		},

		js: {
			files: ['js/**/*.js', '_includes/**/*.js', '!**/build/**'],
			tasks: ['uglify', 'copy'],
		},

		images: {
			files: ['img-src/**/*.{png,jpg,gif}'],
			tasks: ['imagemin'],
			options: {
				spawn: false,
			}
		},

		jekyll: {
			// capture all except css
			files: ['*.html', '_includes/**/*.html', '_layouts/**', '_tables/**'],
			tasks: 'jekyll'
			}
	}

});

// Load the plugin that provides the tasks.
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-jekyll');
grunt.loadNpmTasks('grunt-contrib-watch');

// Default task(s).
grunt.registerTask('default', ['watch']);
grunt.registerTask('build-scss', ['sass', 'autoprefixer', 'copy']);
grunt.registerTask('build-jekyll', 'jekyll');
grunt.registerTask('compressImgs', 'imagemin');

};