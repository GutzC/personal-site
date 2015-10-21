'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var lint = require('gulp-eslint');

var config = {
	port: 9007,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './public/**/*.html',
		css: './public/style/*.css',
		js: './public/js/**/*.js',
		images: './public/img/*',
		dist: './dist'
	}
}

gulp.task('connect', function() {
	connect.server({
		root: './public',
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
})

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
})

gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
})

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify) // Transform javascript using Reactify (compiling JSX)
		.bundle() // Put everything we get from transform into a single JS file
		.on('error', console.error.bind(console)) // If any errors happen, print them to console
		.pipe(source('bundle.js')) // Name of bundled file
		.pipe(gulp.dest(config.paths.dist + '/scripts')) // Where generated file goes
		.pipe(connect.reload()); // Reload page whenever js has changed
})
