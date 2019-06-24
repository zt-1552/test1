const gulp = require('gulp'); // Подключаем gulp
const concat = require('gulp-concat'); // Подключаем соединение файлов
const del = require('del'); // Подключаем удаление файлов
const sass = require('gulp-sass'); // Подключаем sass
const autoprefixer = require('gulp-autoprefixer'); // Подключаем добавление префиксов css
const cleanCSS = require('gulp-clean-css'); // Подключаем минификацию css
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create(); // Подключаем Browser Sync
const gulpif = require('gulp-if');
let isProd = false;

gulp.task('html',  function(){
    return gulp.src('app/*.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('fonts',  function(){
    return gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('font-awesome',  function(){
    return gulp.src('app/libs/fontawesome/webfonts/**/*.*')
    .pipe(gulp.dest('public/webfonts'));
});


gulp.task('styles',  function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulpif(isProd, autoprefixer({
        browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
    })))
    .pipe(gulpif(isProd, cleanCSS()))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts',  function(){
    return gulp.src('app/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulpif(isProd, uglify()))
    .pipe(gulp.dest('public/js'));
});

// gulp.task('moveJquery',  function(){
//     return gulp.src('app/libs/jquery/dist/jquery.min.js')
//     .pipe(gulp.dest('public/js'));
// });
//
// gulp.task('libScripts',  function(){
//     return gulp.src([
//       'app/libs/imagesloaded/imagesloaded.pkgd.js',
//       'app/libs/masonry-layout/dist/masonry.pkgd.js'
//     ])
//     .pipe(concat('libs.js'))
//     .pipe(gulpif(isProd, uglify()))
//     .pipe(gulp.dest('public/js'));
// });

gulp.task('assets',  function(){
    return gulp.src('app/img/**/*.{png,gif,jpg,svg}')
    .pipe(gulp.dest('public/img'));
});

gulp.task('clean',  function(){
    return del('public');
});

gulp.task('serve', function() { // Создаем таск browser-sync
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch('app/*.html', gulp.series('html')); // Наблюдение за html файлами
    gulp.watch('app/scss/**/*.scss', gulp.series('styles')); // Наблюдение за sass файлами
    gulp.watch('app/js/**/*.js', gulp.series('scripts')); // Наблюдение за js файлами
});

// 'moveJquery', 'libScripts',
gulp.task('build', gulp.series('clean', 'html', 'fonts', 'font-awesome', 'assets',  'styles', 'scripts'));

gulp.task('dev', gulp.series('build', gulp.parallel('serve', 'watch')));
