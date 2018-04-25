'use strict';

// required : access to gulp API
var gulp = require('gulp');

// required : access to global configuration variables
var config = require('./config.json');


/**
 * @task copy
 * @desc Copy files (for build task)
 * @require
 */
gulp.task('copy', ['styles'], function () {
  return gulp.src([
    config.src + 'favicon.ico',
    config.src + config.assets.fonts + '**/*',
    config.src + config.assets.images + '**/*',
    config.src + config.assets.data + '**/*',
    config.src + config.assets.scripts + '**/*',
    config.src + 'assets/styles/**/*', '!' + config.src + 'assets/styles/**/*.zip', '!' + config.src + 'assets/styles/**/*.map',
    config.src + config.templates + '*'
  ], {
    base: config.src
  }).pipe( gulp.dest(config.dist) );
});