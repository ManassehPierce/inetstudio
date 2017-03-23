var gulp = require('gulp'),
    pug = require('gulp-pug'),
    stylus = require('gulp-stylus'),
    babel = require('gulp-babel');

gulp.task('html', () => {
  return gulp.src('src/*.pug')
    .pipe(pug({ 'pretty': true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
  return gulp.src('src/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
  gulp.src('src/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe('dist');
});

gulp.task('default', ['html', 'css', 'js'], () => {
	gulp.watch(['src/*.pug'], ['html']);
	gulp.watch(['src/*.styl'], ['css']);
	gulp.watch(['src/*.js'], ['js']);
});
