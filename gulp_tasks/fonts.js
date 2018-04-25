'use strict';

// required : access to gulp API
var gulp = require('gulp');

// required : access to global configuration variables
var config = require('./config.json');




/**
 * @task font
 * @desc Copy font dependencies
 * @require
 */
gulp.task('fonts', ['fontawesome']);




/**
 * @task fontawesome
 * @desc Copy font dependencies (for fontawesome lib)
 * @require
 */
gulp.task('fontawesome', function () {
  return gulp.src([
    config.src + config.bower + 'font-awesome/fonts/*'
  ], {
    base: config.src
  }).pipe( gulp.dest(config.assets.fonts + 'font-awesome/') );
});