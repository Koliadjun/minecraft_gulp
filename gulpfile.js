var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var server = require('gulp-server-livereload');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('imgCopy', function(){
	gulp.src('./dev/img/*')
	.pipe(gulp.dest('./app/img/'))
  gulp.src('./dev/icons/*')
  .pipe(gulp.dest('./app/icons/'))
})
gulp.task('jsCopy', function(){
  gulp.src('./dev/js/*')
  .pipe(gulp.dest('./app/js/'))
})

gulp.task('sass', function () {
  return gulp.src('./dev/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
            browsers: ['last 30 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('.'))
    
    .pipe(gulp.dest('./app/css'));
});


gulp.task('watch', function(){
	gulp.watch('./dev/*.pug',['views'])
	gulp.watch('./dev/pug-chunks/*.pug',['views'])
  gulp.watch('./dev/scss/*.scss',['sass'])
  gulp.watch('./dev/js/*.js',['jsCopy'])
})
 

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: false
    }));
});

gulp.task('views', function buildHTML() {
  return gulp.src('./dev/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./app/'))
});

gulp.task('default', ['watch','views','webserver', 'sass', 'jsCopy','imgCopy']);
