var gulp = require('gulp');
var editor = require('gulp-json-editor');
var del = require('del');
var path = require('path');

gulp.task('clean', function () {
  return del(path.join(__dirname, 'build'));
});

gulp.task('lib', ['clean'], function () {
  return gulp.src('lib/*.js')
    .pipe(gulp.dest('build'));
});

gulp.task('docs', ['clean'], function () {
  return gulp.src('README.md')
    .pipe(gulp.dest('build'));
});

gulp.task('package', ['clean'], function () {
  return gulp.src('./package.json')
    .pipe(editor({
      main: 'mix',
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['lib', 'docs', 'package']);

