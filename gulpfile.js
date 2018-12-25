const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const babel = require("gulp-babel");

gulp.task("default", defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task("pug", function() {
  return gulp
    .src("./src/templates/*.pug")
    .pipe(
      pug({
        doctype: "html",
        pretty: false
      })
    )
    .pipe(gulp.dest("./public/"));
});

gulp.task("sass", function() {
  return gulp
    .src("./src/css/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/"));
});

gulp.task("babel", function() {
  return gulp
    .src("src/javascript/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./public/"));
});

gulp.task(
  "watch",
  gulp.series("pug", "sass", "babel", function() {
    gulp.watch("./src/templates/*.pug", gulp.series("pug"));
    gulp.watch("./src/css/*.scss", gulp.series("sass"));
    gulp.watch("./src/js/*.js", gulp.series("babel"));
  })
);
