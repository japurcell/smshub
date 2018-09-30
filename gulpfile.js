var gulp  = require('gulp'),
    mocha = require('gulp-mocha')
    tsc   = require('gulp-typescript'),
    tsProject = tsc.createProject('tsconfig.json');

gulp.task('build', () =>
    gulp.src([
        './**/*.ts'
        ])
        .pipe(tsProject())
        .js.pipe(gulp.dest("./")));

gulp.task('build-test', ['build'], () =>
    gulp.src([
        'test/**/*.ts'
        ])
        .pipe(tsProject())
        .js.pipe(gulp.dest("test/")));

gulp.task('test', ['build-test'], () =>
    gulp.src('test/**/**.js')
        .pipe(mocha()));

gulp.task('default', ['build-test'], () =>
    gulp.watch(['./**/*.ts'], ['build']));