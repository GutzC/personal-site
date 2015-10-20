"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files
var lint = require('gulp-eslint'); // Lint our JS files

// Configuration object to reference values throughout file... mostly for paths to use
var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'public/style/*.css'
		],
		js: './public/**/*.js',
		images: './public/img/*',
		dist: './dist',
		mainJs: './src/main.js'
	}
}

// Gulp tasks are declared like below. The first parameter is the name of the particular task, any dependencies are put into an array as the second parameter ['dependency']

// Start a local development server using config information above
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
})

// Dependancy on the connect task above. This syntax means run the 'connect' task first before running this new 'open' task
gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
})

gulp.task('html', function(){
	gulp.src(config.paths.html) // Go get any html files
		.pipe(gulp.dest(config.paths.dist)) // put them into the destination path defined above (.dist)
		.pipe(connect.reload()); // then reload using connect.. the dev server downloaded from NPM
})

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.bundle() // Put everything we get from transform into a single JS file
		.on('error', console.error.bind(console)) // If any errors happen, print them to console
		.pipe(source('bundle.js')) // Name of bundled file
		.pipe(gulp.dest(config.paths.dist + '/scripts')) // Where generated file goes
		.pipe(connect.reload()); // Reload page whenever js has changed
})

gulp.task('css', function(){
	gulp.src(config.paths.css) // Look for the paths defined up above in the node modules
		.pipe(concat('bundle.css')) // Concatenate these files and put into bundle.css
		.pipe(gulp.dest(config.paths.dist + '/css')); // Drop the new file into this file in this directory
})

gulp.task('images', function(){
	gulp.src(config.paths.images) // Use the path defined above to grab all images in this location
		.pipe(gulp.dest(config.paths.dist + '/images')) // Move these into the dist/images folder
		.pipe(connect.reload()); // Reload the page

	// Publish favicon
	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
})

gulp.task('lint', function(){
	return gulp.src(config.paths.js) // Must return the results of the function so that we can see the output of our Linting
		.pipe(lint({config: 'eslint.config.json'})) // file where we can create our rules
		.pipe(lint.format());
})

gulp.task('watch', function(){ // Watch files so that any time we make a change, Gulp reloads the file automatically
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
})

gulp.task('default', ['html', 'css', 'js', 'images', 'lint', 'open', 'watch']); // Default task to run when typing gulp from the command line -- it will run any included tasks
