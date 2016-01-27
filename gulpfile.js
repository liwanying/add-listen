/*
 * @Author: 婉君
 * @Date:   2016-01-26 20:19:59
 * @Last Modified by:   婉君
 * @Last Modified time: 2016-01-27 13:33:26
 */

'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano')
gulp.task('styles', function() {
  gulp.src("src/css/*.less")
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"))
});
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('script', function() {
  gulp.src("src/script/*.js")
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/script'))
})
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function() {
  gulp.src("src/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
})
