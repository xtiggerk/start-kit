'use strict';

// required : access to gulp API
var gulp = require('gulp');

// required : access to global configuration variables
var config = require('./config.json');

// required : access to global configuration variables
var concat = require('gulp-concat');

// plugin gulp sourcemap : for generate css.map files
var sourcemaps = require('gulp-sourcemaps');

// plugin for livereload
var browserSync = require('browser-sync');


gulp.task('scripts', function () {
    var script = config.src + config.assets.scripts;
    return gulp.src([
        script + 'modules/components/*.js',
        script + '/modules/pages/*.js',
        script + '/modules/*.js',
        script + 'main.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(script))
        .pipe(browserSync.stream());
});