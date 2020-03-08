const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

gulp.task('html', () => {
    gulp.src('./web-app/*.html')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('sass', () => {
    gulp.src('./web-app/styles/sass/**/*.sass')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('./web-app/styles/css'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', () => {
    gulp.src('./web-app/javascript/*.js')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './web-app/',
        }
    })
})

gulp.task('watch', () => {
    gulp.watch('./web-app/*.html', gulp.parallel('html'))
    gulp.watch('./web-app/styles/**/*.sass', gulp.parallel('sass'))
    gulp.watch('./web-app/javascript/*.js', gulp.parallel('js'))
})

gulp.task('default', gulp.parallel('browser-sync', 'watch'))