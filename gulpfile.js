var gulp = require('gulp');
 
var browserSync = require("browser-sync");
var exec = require('child_process').exec

gulp.task("browserSyncTask", function () {
    browserSync({
        server: {
            baseDir: "." // ルートとなるディレクトリを指定
        }
    });
 
    //gulp.watch("source/**", function() {
    //    exec('make html')
    //});
    gulp.watch("./**", browserSync.reload);
});

gulp.task('default', ['browserSyncTask']);
