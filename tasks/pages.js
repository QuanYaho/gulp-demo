// 模板处理
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))  // 将app/**/*.ejs下的文件拷贝到server目录下
        .pipe(gulpif(args.watch,livereload()))
})