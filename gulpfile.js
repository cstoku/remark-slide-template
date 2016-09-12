var gulp = require('gulp');
var sass = require('gulp-sass');
 
var browserSync = require("browser-sync");
var exec = require('child_process').exec

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task("browserSyncTask", function () {
    browserSync({
        server: {
            baseDir: "." // ルートとなるディレクトリを指定
        }
    });
 
    gulp.watch("**/*.html", browserSync.reload);
    gulp.watch("**/*.md", browserSync.reload);
    gulp.watch('css/**/*.css', browserSync.reload);
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['browserSyncTask']);
