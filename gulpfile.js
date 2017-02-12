var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');


gulp.task('connect', function() {
  connect.server({
    root: 'frontend',
    livereload: true
  });
});

 
gulp.task('sass', function () {
  return gulp.src('./frontend/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./frontend/css'));
});

gulp.task('html', function () {
  gulp.src('./frontend/*.html')
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['./frontend/*.html'], ['html']);
  gulp.watch('./frontend/sass/**/*.sass', ['sass']);
});


gulp.task('default', ['connect', 'watch']);