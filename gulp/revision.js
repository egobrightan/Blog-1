'use strict';
var gulp = require('gulp');
var rev  = require('gulp-rev');

var files = [
  'web/assets/app.js'
];

gulp.task('rev', ['js'], function () {
  gulp.src(files)
    .pipe(rev())
    .pipe(gulp.dest('assets'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('assets'));
});