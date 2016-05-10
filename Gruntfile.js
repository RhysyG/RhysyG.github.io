'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Grunt Jekyll
        jekyll: {
            working: {
              options: {
                config: '_config.yml',
                //drafts: true
              }
            }
        },

        // Compile SCSS into CSS
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: 'css',
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.min.css'
                }]
            }
        },

        autoprefixer: {
        	dist: {
        		files: {
        			'_site/css/main.min.css': '_site/css/main.min.css'
        		}
        	}
        },

        // Squash jQuery into one minified file
        uglify: {
        	build: {
        		src: ['js/main.js', 'js/site-nav.js' ],
        		dest: '_site/js/main.min.js'
        	}
        },

        // Fire up a server with live reload
        connect: {
            server: {
                options: {
                    port: 9003,
                    base: '_site',
                    livereload:true
                }
            }
        },

        // Watch for files to change and run tasks when they do
        watch: {
            options: {
                interval: 500,
                livereload: true
            },
            sass: {
                files: ['css/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            js: {
            	files: ['js/**/*.js'],
            	tasks: ['uglify']
            },
            jekyll: {
                files: ['**/*.md', '**/*.html', '**/*.markdown' , '!**/_site/**', '!**/node_modules/**'],
                tasks: ['jekyll']
            } 
        }

    });

    // Register build as the default task fallback
    grunt.registerTask('default', ['connect', 'watch'] );

};