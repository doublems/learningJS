const gulp = require('gulp');
// 걸프 의존성을 여기에 씁니다.
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
gulp.task('default',function(){
  //걸프 작업을 여기에 씁니다.

  //ESLint 실행
  gulp.src(["es6/**/*.js","public/es6/**/*.js"])
  .pipe(eslint())
  .pipe(eslint.format());

  //노드소스에 있는 ES6 코드를 자동으로 ES5로 변환
  gulp.src("es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"));

  //브라우저 소스에 있는 ES6 코드를 자동으로 ES5로 변환
  gulp.src("public/es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("public/dist"));
});
