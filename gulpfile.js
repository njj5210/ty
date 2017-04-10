var gulp = require('gulp');
var sass=require('gulp-sass');
var to5=require("gulp-6to5");
var connect = require('gulp-connect');
var swig=require('gulp-swig');
// var data=require('gulp-data');

var opts={defaults: { cache: false }};

gulp.task('templates', function() {
    gulp.src('./*.html')
        .pipe(swig())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
    gulp.src(['./css/index.css','./css/iconfont.css','./css/swiper.min.css'])
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload());
});

gulp.task('js',function(){
    gulp.src(["./js/index.js","./js/jquery-1.12.3.min.js","./js/swiper.min.js"])
        .pipe(to5())
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});

gulp.task('image',function () {
    gulp.src("./image/*")
        .pipe(gulp.dest('./build/image'))
        .pipe(connect.reload());
});

gulp.task('iconfont',function () {
    gulp.src("./iconfont/*")
        .pipe(gulp.dest('./build/iconfont'))
        .pipe(connect.reload());

});

gulp.task('html',function(){
    gulp.src("./tpl/*")
        .pipe(swig(opts))
        .pipe(gulp.dest('./build/tpl'))
        .pipe(connect.reload());
});

gulp.task('index',function(){
         gulp.src("./index.html")
             .pipe(swig(opts))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('connect',function () {
    connect.server({livereload: true,root: './build'});
});

gulp.task('public',function(){
    gulp.src("./public/*")
        .pipe(swig(opts))
        .pipe(gulp.dest('./build/public'))
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch('./css/*',['sass']);
    gulp.watch('./index.html',['index']);
    gulp.watch('./tpl/*.html',['html']);
    gulp.watch('./public/*.html',['public']);
    gulp.watch('./image/*',['image']);
    gulp.watch('./iconfont/*',['iconfont']);
    gulp.watch('./js/*.js',['js']);
});

gulp.task('server',['watch','sass','image','html','js','iconfont','connect','index','templates','public']);
gulp.task('default',function(){

});
