const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('static:dev', () => {
    return gulp.src('app/**/*.html')
      .pipe(gulp.dest('build'));
});

gulp.task('webpack:dev', () => {
  return gulp.src('app/js/entry.js')
    .pipe(webpack({
      devtools: 'source-map',
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('webpack:test', () => {
  return gulp.src('test/unit/test_entry.js')
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'test_bundle.js'
      }
    }))
    .pipe(gulp.dest('test/unit'));
});

gulp.task('default', ['webpack:dev', 'static:dev']);
