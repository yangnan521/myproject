
var gulp = require('gulp');
var sass= require('gulp-sass');//sass命令
//gulp.task('命令名',回调函数);


gulp.task('copy-html',function(){
	gulp.src('*.html')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\hello'));
});

gulp.task('copy-img',function(){
	gulp.src('img/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\hello\\images'));
})

gulp.task('copy-css',function(){
	gulp.src('*.scss')
	.pipe(sass())
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\hello\\css'));
})

gulp.task('copy-scss',function(){
	gulp.src('*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
})

gulp.task('copy-js',function(){
	gulp.src('js/*.js').pipe(gulp.dest('D:\\phpStudy\\WWW\\hello\\js'));
})

gulp.task('watch',function(){
	gulp.watch('*.html',['copy-html']);
	gulp.watch('img/**/*',['copy-img']);
	gulp.watch('js/*.js',['copy-js']);
	gulp.watch('*.scss',['copy-css']);
	gulp.watch('*.scss',['copy-scss']);
})
