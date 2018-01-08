
// 使用プラグイン読み込み
const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const nib = require('nib');
const browserSync = require('browser-sync').create();

// common内のstylusの書き出し
gulp.task('stylus',function(){
  return gulp.src([
    'src/common/**/*.styl',
    '!src/common/**/_*.styl'
  ])
  .pipe(plumber())
  .pipe(stylus({
    import: ['nib'],
    use: [nib()]
  }))
  .pipe(gulp.dest('html/common'))
  .pipe(browserSync.stream())
});

// pugの書き出し

gulp.task('pug',function(){
  return gulp.src([
    'src/*.pug',
    'src/**/*.pug',
    '!src/**/_*.pug'
  ])
  .pipe(pug({
    pretty: true
  }))
  .pipe(plumber())
  .pipe(gulp.dest('html'))
  .pipe(browserSync.stream())
})


// gulp.task('copy',function(){
//   return gulp.src([
//     ''
//   ])
// })
gulp.task('watch',function(){
  browserSync.init({
    server: {
      baseDir: "html"
    }
  });

  gulp.watch(['src/common/**/*.styl'],['stylus']);
  gulp.watch(['src/*.pug','src/**/*.pug','!src/**/_*.pug'],['pug']);
})
