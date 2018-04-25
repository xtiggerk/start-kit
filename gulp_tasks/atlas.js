"use strict";
// required : access to gulp API
var gulp = require("gulp");
var run = require("gulp-run");
// plugin for livereload
var browserSync = require("browser-sync");
// required : access to global configuration variables
var config = require("./config.json");
var atlas = require("atlas-guide");

gulp.task("atlas-build", function() {
  run("npm run build-atlas").exec();
});
