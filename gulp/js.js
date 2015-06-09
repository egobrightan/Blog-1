var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function () {
   gulp.src(['public/app/app.js', 'public/app/**/*.js', 'public/app/**/**/*.js', 'public/app/**/**/**/*.js'])
       .pipe(sourcemaps.init())
       .pipe(concat('app.js'))
//      .pipe(ngAnnotate())
//      .pipe(uglify())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('public/assets'));
});
 
gulp.task('js:watch', ['js'], function () {
      gulp.watch('public/app/**/*.js', ['js'])
});