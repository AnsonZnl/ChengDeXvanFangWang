var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
gulp.task('default', ['serve']);
gulp.task('serve', ['concat-css', 'concat-js'], function () {
    browserSync.init({
        server: "./"
    });
    gulp.watch('scss/**/*.scss', ['concat-css']);
    gulp.watch('js/script.js', ['concat-js']);
    gulp.watch("**/*.html").on('change', reload);
});
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['concat-css']);
    gulp.watch('js/script.js', ['concat-js']);
});
gulp.task('concat-css', function () {
    return gulp.src([
            'scss/scss.scss'
        ])
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest("css"))
        .pipe(reload({
            stream: true
        }))
    ;
});
gulp.task('concat-js', function () {
    return gulp.src([
            'js/script.js'
        ])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest('js'))
        .pipe(reload({
            stream: true
        }))
    ;
});