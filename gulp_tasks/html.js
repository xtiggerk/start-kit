'use strict';

// required : access to gulp API
var gulp = require('gulp');

// required : access to global configuration variables
var config = require('./config.json');

// required : for testing conditionnal
var gulpif = require('gulp-if');

// required : for build JS files
var useref = require('gulp-useref');

// required : for minify CSS files
var cssnano = require('gulp-cssnano');



/**
 * @task html
 * @desc Deploy html files with optimization
 */
gulp.task('html', function () {
  return gulp.src(config.src + '*.html')
    .pipe( useref() )
    .pipe(gulpif('*.css', cssnano({
        discardComments: false,
        autoprefixer: true
      }))
    )
    .pipe( gulp.dest(config.dist) );
});


