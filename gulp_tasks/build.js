'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

var config = require('./config');

gulp.task('build', ['clean'], function() {
  gulp.start('dist');
});

gulp.task('dist', [
  'extend',
  'copy',
  'html'
]);
