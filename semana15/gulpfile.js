var gulp = require("gulp");
var jade = require("gulp-jade");

gulp.task("jade", function(){
	return gulp.src("templates/*.jade")
	.pipe(jade())
	.pipe(gulp.dest("builds"));
})