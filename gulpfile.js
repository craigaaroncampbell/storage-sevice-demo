const gulp = require('gulp');
const webpack = require('webpack-stream');
const protractor = require('gulp-protractor').protractor;
const cp = require('child_process');
const eslint = require('gulp-eslint');

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

var children = [];
gulp.task('server:start', () => {
  children.push(cp.fork('server.js'));
  children.push(cp.spawn('webdriver-manager', ['start']));
});

gulp.task('protractor', ['lint', 'build:dev', 'server:start'], () => {
  return gulp.src(['test/integration/*spec.js'])
    .pipe(protractor({
      configFile: 'test/integration/protractor.config.js'
    }))
    .on('error', (err) => {
      console.log(err);
    })
    .on('end', () => {
      children.forEach((child) => {
        child.kill('SIGTERM');
      });
    });
});

gulp.task('lint', () => {
  gulp.src(['app/**/*.js', __filename, '!**/*bundle.js', 'test/**/*.js', 'server.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'webpack:test']);

gulp.task('default', ['lint', 'build:dev']);
