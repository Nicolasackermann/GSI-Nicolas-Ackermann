var gulp = require('gulp'),
    pug = require('gulp-pug');

// run this task by typing in gulp
gulp.task('pug', function() {
    return gulp.src('src/pages/*.pug')
        .pipe(pug(
            {
                pretty:true
            }
        )) // pip to pug plugin
        .pipe(gulp.dest('dist/pages')); // tell gulp our output folder
});


var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/sass/*.scss',['styles']);
    gulp.watch('src/pages/*.pug', ['pug'])
});

