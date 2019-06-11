var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');
var minifyjs = require('gulp-js-minify');
var rename = require("gulp-rename");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask

//сжимаем js.файлы
gulp.task('js', function(cb){
  return gulp.src('./src/js/map-settings.js')
    .pipe(minifyjs())
    .pipe(rename('map-settings.min.js'))
    .pipe(gulp.dest('dist/js'));

  cb();
});

// cжимаем css
gulp.task('minify-css', function(cb) {
  gulp.src('src/css/*.css')
  .pipe(cleanCss ({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css'))

  cb();
});

// переносим сжатые бибилиотеки в dist
gulp.task('move-js', function(cb) {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('dist/js'))

  cb();
});

// cжимаем html файл
gulp.task('minify-html', function(cb) {
  gulp.src('./src/*.html')
  .pipe(htmlMin ({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'))

  cb();
});

// перекидываем шрифты
gulp.task('move-fonts', function(cb) {
  return gulp.src('src/fonts/**/*.*')
  .pipe(gulp.dest('dist/fonts'))

  cb();
});

var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (cb) {
  gulp.src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
        key: 'HPULULvNdCHMLxBYmK6evKEyS719KzXe'
    }))
    .pipe(gulp.dest('dist/img/'));

    cb();
});