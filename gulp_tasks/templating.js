'use strict';

// required : access to gulp API
var gulp = require('gulp');

// required : access to global configuration variables
var config = require('./config.json');

// require mustache
var extender = require("gulp-html-extend");

// plugin for livereload
var browserSync = require('browser-sync');

gulp.task('extend', function () {
    gulp.src([config.src + 'templates/*.html', '!' + config.src + 'templates/partials/**/*' /*, config.src + 'index.html'*/])
        .pipe(extender({annotations:false,verbose:false})) // default options
        .pipe(gulp.dest(config.src))
        .pipe(browserSync.reload({stream:true}));
});