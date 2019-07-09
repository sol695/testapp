/*eslint null:0*/
const gulp = require('gulp'); //eslint-disable-line null
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');

const isDev = (process.argv.indexOf('--dev') !== -1);
const isProd = !isDev;
const isSync = (process.argv.indexOf('--sync') !== -1);

/*
	1. browserSync для html
	2. 
		gulp-uncss - удаление неиспользуемого css
		gulp-group-css-media-queries - соединение media-запрос
	3. по желанию pug html препроц
*/

let cssFiles = [
  './node_modules/normalize.css/normalize.css',
  './src/css/base.css',
  './src/css/grid.css',
  './src/css/humans.css',
];

function clear() {
  return del('build/*');
}

function styles() {
  return gulp.src(cssFiles).
      pipe(gulpif(isDev, sourcemaps.init())).
      pipe(concat('style.css')).
      pipe(autoprefixer({
        browsers: ['> 0.1%'],
        cascade: false,
      })).
      pipe(gulpif(isProd, cleanCSS({
        level: 2,
      }))).
      pipe(gulpif(isDev, sourcemaps.write())).
      pipe(gulp.dest('./build/css')).
      pipe(gulpif(isSync, browserSync.stream()));
}

function img() {
  return gulp.src('./src/img/**/*').pipe(gulp.dest('./build/img'))
}

function html() {
  return gulp.src('./src/*.html').pipe(gulp.dest('./build'))
}

function watch() {
  if (isSync) {
    browserSync.init({
      server: {
        baseDir: './build/',
      },
    });
  }

  gulp.watch('./src/css/**/*.css', styles);
}

let build = gulp.series(clear,
    gulp.parallel(styles, img, html),
);
// gulp.task('css', styles);
gulp.task('build', build);
// gulp.task('clear',clear);
gulp.task('watch', gulp.series(build, watch));