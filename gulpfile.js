/*
 * @Author: 婉君
 * @Date:   2016-01-26 20:19:59
 * @Last Modified by:   婉君
 * @Last Modified time: 2016-01-28 19:14:03
 */

'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
gulp.task('styles', function() {
  gulp.src("src/css/*.less")
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('script', function() {
  gulp.src("src/script/*.js")
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/script'))
    .pipe(browserSync.reload({
      stream: true
    }));
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
var browserSync = require('browser-sync');
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: ['dist']
    },
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });
  gulp.watch('src/css/*.less', ['styles']);
  gulp.watch('src/script/*.js', ['script']);
  gulp.watch('src/*.html', ['html']);
})
