// 引包，yargs 模块能够解决如何处理命令行参数
import yargs from 'yargs';

// 给yargs定义参数

// yargs 模块提供3个方法，用来配置命令行参数。
// demand：是否必选
// default：默认值
// describe：提示

// options 方法允许将所有这些配置写进一个对象。

const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    // 是否输出命令行日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })
    // 服务器端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv // yargs 模块提供 argv 对象，用来读取命令行参数。

export default args;