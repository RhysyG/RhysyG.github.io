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
                outputStyle: 'compressed',
                sassDir: 'css',
                cssDir: 'css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['**/*.{scss,sass}'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        autoprefixer: {
        	dist: {
        		files: {
        			'css/main.min.css': 'css/main.min.css'
        		}
        	}
        },

        // Squash jQuery into one minified file
        uglify: {
        	build: {
        		src: [
                'js/_mousewheelStopPropagation.js',
                'js/_site-nav.js',
                'js/_site-header.js',
                'js/_app.js',
                'js/_page-animate.js',
                ],
        		dest: 'js/main.min.js'
        	}
        },

        copy: {
            css: {
                files: {
                    '_site/css/main.min.css' : 'css/main.min.css',
                    '_site/js/main.min.js' : 'css/main.min.js',
                }
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
                tasks: ['sass', 'autoprefixer', 'copy']
            },
            js: {
            	files: ['js/**/*.js', '!js/main.min.js'],
            	tasks: ['uglify', 'copy']
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