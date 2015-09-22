var gulp = require('gulp'),
	del = require('del'),
	sass = require('gulp-sass');

gulp.task('clean', function(callback) {
	del(['dist/**/*'], callback);
});

gulp.task('sass', ['clean'], function() {
	return gulp.src('./src/main.scss', {
			base: './src/'
		})
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/'));
});


gulp.task('copy', ['clean'], function() {
	return gulp.src([
			'./src/index.html',
		], {
			base: './src/'
		})
		.pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['sass', 'copy']);