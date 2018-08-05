// js处理

import gulp from 'gulp';
import gulpif from 'gulp-if'; // 在gulp中使用if语句的
import concat from 'gulp-concat'; // 在gulp中处理文件拼接的
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';  // gulp对webpack的处理要结webpack-stream
import named from 'vinyl-named'; // 标志重命名文件
import livereload from 'gulp-livereload'; // 热更新
import plumber from 'gulp-plumber';  // 处理文件信息流
import rename from 'gulp-rename';   // 对文件重命名
import uglify from 'gulp-uglify';  // 处理js压缩
import {log,colors} from 'gulp-util'; // 在命令行工具输出信息
import args from './util/args';  //解析命令行参数

// 任务名称scripts
gulp.task('scripts',()=> {
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandle:function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module:{
                rules:[{
                    test:/\.js$/,
                    loader:'babel-loader'
                }]
            }
        }),null,(err,stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: 'cp',
            extname:'.min.js'
        }))
        .pipe(uglify({
            compress:{properties:false},
            output:{'quote_keys': true}
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload()))
})
