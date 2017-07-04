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
  html: "**/*.html",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  materializeSass: "scss/materialize-sass.scss",
  mainJS: "js/app.js",
  components: "js/components/*.js",
  navbar: "js/components/navbar.js",
  tags: "js/components/tags.js",
  board: "js/components/board.js",
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  js: config.source + paths.js,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootMaterialize: config.source + paths.assets + paths.materializeSass,
  rootJS: config.source + paths.assets + paths.mainJS,
  rootNavbar: config.source + paths.assets + paths.navbar,
  rootTags: config.source + paths.assets + paths.tags,
  rootBoard: config.source + paths.assets + paths.board,
  rootComponents: config.source + paths.assets + paths.components
};
/*
gulp.task('min', () => {
  gulp.src('./src/assets/js/components/*.js')
  .pipe(concat("todo.js"))
  .pipe(uglify())
  .pipe(gulp.dest('./src/assets/js/'));
});
*/
gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
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

gulp.task('js', ()=>{
  gulp.src(sources.rootJS)
  .pipe(browserify())
  .pipe(rename("bundle.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('navbar', ()=>{
  gulp.src(sources.rootNavbar)
  .pipe(browserify())
  .pipe(rename("navbar.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js/components"));
});

gulp.task('tags', ()=>{
  gulp.src(sources.rootTags)
  .pipe(browserify())
  .pipe(rename("tags.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js/components"));
});

gulp.task('board', ()=>{
  gulp.src(sources.rootBoard)
  .pipe(browserify())
  .pipe(rename("board.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js/components"));
});

gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("sass-materialize", ["materialize"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("navbar-watch", ["navbar"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("tags-watch", ["tags"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("board-watch", ["board"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
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
  gulp.watch(sources.rootSass, ["sass-watch"]);
  gulp.watch(sources.rootMaterialize, ["materialize-watch"]);
  gulp.watch(sources.rootJS, ["js-watch"]);
  gulp.watch(sources.rootNavbar, ["navbar-watch"]);
  gulp.watch(sources.rootTags, ["tags-watch"]);
  gulp.watch(sources.rootBoard, ["board-watch"]);
});
