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

gulp.task('default', ['webpack:dev', 'static:dev']);
