var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var config = {
  source: './src/',
  dist: './public'
};

var paths = {
  assets: "/assets/",
  img: "assets/img/*",
  js: "assets/js/",
  materializeJs: "assets/scss/js/bin/materialize.min.js",
  html: "**/*.html",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  materializeSass: "scss/materialize-sass.scss",
  componentsFolder: "./src/assets/js/components/"
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  materializeJs: config.source + paths.materializeJs,
  img: config.source + paths.img,
  sass: paths.assets + paths.sass,
  js: config.source + paths.js,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootMaterialize: config.source + paths.assets + paths.materializeSass,
  rootComponents: config.source + paths.assets + paths.components
};

gulp.task('todo', () => {
  gulp.src([sources.materializeJs, paths.componentsFolder+'navbar.js',paths.componentsFolder+'header.js',
  paths.componentsFolder+'board.js', paths.componentsFolder+'modal.js', sources.js+'index.js' ])
  .pipe(concat("bundle.js"))
  .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('materialize-js', ()=>{
  gulp.src(sources.materializeJs).pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('img', ()=>{
  gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task('sass', ()=>{
  console.log(sources.rootSass);
  gulp.src(sources.rootSass)
  .pipe(sass({
    outputStyle: "compressed"
  }).on("Error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('materialize', ()=>{
  console.log(sources.rootMaterialize);
  gulp.src(sources.rootMaterialize)
  .pipe(sass({
    outputStyle: "compressed"
  }).on("Error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("sass-materialize", ["materialize"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("todo-watch", ["todo"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.img, ["img-watch"]);
  gulp.watch(sources.rootSass, ["sass-watch"]);
  gulp.watch(sources.rootMaterialize, ["materialize-watch"]);
  gulp.watch(['./src/assets/js/components/*.js', sources.js+'index.js'], ["todo-watch"]);
});
