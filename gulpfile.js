var gulp = require("gulp"),
    less = require("gulp-less"),
    nano = require("gulp-cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    gulpIf = require("gulp-if"),
    uglify = require("gulp-uglify"),
    autoprefixer = require("gulp-autoprefixer"),
    sync = require("browser-sync").create(),
    imageMin = require("gulp-imagemin");


var isDevelopment = true;


gulp.task("js:own", function() {
    return gulp.src("src/js/main.js")
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("js:vendor", function() {
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js"
    ])
        .pipe(concat("vendor.js"))
        .pipe(gulpIf(!isDevelopment, uglify()))
        .pipe(gulp.dest("dist/js"));
});


gulp.task("css:vendor", function() {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.css"
    ])
        .pipe(gulpIf(!isDevelopment, nano()))
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("css:own", function() {
    return gulp.src("src/css/main.less")
        .pipe(gulpIf(isDevelopment,sourcemaps.init()))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ["last 3 versions"],
            cascade: false
        }))
        .pipe(nano())
        .pipe(gulpIf(isDevelopment,sourcemaps.write()))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream());
});

gulp.task("html", function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("image", function () {
    return gulp.src("src/images/*")
        .pipe(imageMin())
        .pipe(gulp.dest("dist/images"))
});

gulp.task("css", ["css:own", "css:vendor"]);
gulp.task("js", ["js:own", "js:vendor"]);

gulp.task("watch", ["build"] ,function () {
    sync.init({
        server: "dist"
    });

    gulp.watch("src/css/**/*.less", ["css:own"]);
    gulp.watch("src/js/*.js", ["js:own"]);
    gulp.watch("dist/js/*.js").on("change", sync.reload);
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload);
    gulp.watch("src/images/*", ["image"]);
    gulp.watch("dist/images/*").on("change", sync.reload);
});

gulp.task("build", ["html", "css", "js", "image"]);
gulp.task("default", ["build", "watch"]);