'use strict';

// required : access to gulp API
var gulp = require('gulp');

// required : access to global configuration variables
var config = require('./config.json');

// plugin for livereload
var browserSync = require('browser-sync');

// gulp.task('atlas-build', done => { atlas.buildAll().then(browserSync.reload())});

/**
 * @task serve
 * @desc Create server + watchers
 * @require plugins : browserSync
 */
gulp.task('serve', ['styles', 'scripts', 'fonts', 'extend'], function () {
  browserSync.init({
    notify: false,
    port: config.serve.port,
    browser: config.serve.browser,
    open: config.serve.open,
    server: {
      baseDir: [config.src, config.styleguide]
    }
  });

  // Watcher for styles update
  gulp.watch( config.src + config.assets.styles.scss + "**/*.scss", ['styles', 'atlas-build'] );

  // //watch templates
  gulp.watch( config.src + 'templates/**/*.html', ['extend']);

  gulp.watch( config.src + config.assets.scripts + '**/*.js', ['scripts']);

  // Watcher for (HTML + js + assets) update
  gulp.watch([
    config.src + "templates/partials/**/*.html",
    config.src + "templates/*.html",
    config.src + config.assets.scripts + "**/*",
    config.src + config.assets.images + "**/*",
    config.src + config.assets.fonts + "**/*"
  ]).on('save', browserSync.reload);

 
});



/**
 * @task serve
 * @desc Create server
 * @require plugins : browserSync
 */
gulp.task('serve-dist', function () {
  browserSync.init({
    notify: false,
    port: config.serve.port,
    browser: config.serve.browser,
    open: config.serve.open,
    server: {
      baseDir: [ config.dist ]
    }
  });
});