'use strict';

// required : access to gulp API
var gulp = require('gulp');

// required : access to global configuration variables
var config = require('./config.json');

// plugin gulp-sass : use for compile sass
var sass = require("gulp-sass");

// plugin gulp sourcemap : for generate css.map files
var sourcemaps = require('gulp-sourcemaps');

// plugin gulp for add brower prefix to several css rules
var autoprefixer = require('gulp-autoprefixer');

// plugin for livereload
var browserSync = require('browser-sync');


gulp.task('styles', function () {
  return gulp.src( config.src + config.assets.styles.scss + '*.scss' )
    .pipe( sourcemaps.init() )
    .pipe( sass().on('error', sass.logError))
    .pipe( autoprefixer({browsers: ['last 2 versions', '> 1%', 'not IE < 9']}) )
    .pipe( sourcemaps.write('./') )
    .pipe( gulp.dest(config.src + config.assets.styles.css) )
    .pipe( browserSync.stream() );
});