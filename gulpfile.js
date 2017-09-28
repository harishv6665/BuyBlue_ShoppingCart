var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('sass', function() {
    return gulp.src('src/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('default', ['clean', 'sass']);