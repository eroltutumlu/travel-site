var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("You created!");
});

gulp.task('html', function(){
    console.log("Awesome!");
});

gulp.task('styles', function(){
    console.log("SASS!");
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });

});