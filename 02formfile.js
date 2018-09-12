/* 获取到路径
 *  获取到扩展名
 *  加上一个时间窗
 *  fs rename 修改名称
 *  完成  上传文件
 * */
var http = require("http");  //加载http
var formidable = require("formidable");  //加载form表单处理插件
var path = require("path");  //加载path模块 从而取得路径
var sd = require("silly-datetime");  //加载时间插件
var fs = require("fs");  //加载fs模块
http.createServer((req, res)=> {  //创建服务器
    //创建表单请求
    if (req.url == "/dopost" && req.method.toUpperCase() == "POST") {  //前端发送的请求路径，如果是/dopost请求的话并且请求方式是post的话
        var form = new formidable.IncomingForm();  //实例form表单请求函数
        form.uploadDir = "./upload";  //创建一个图片保存的路径
        form.parse(req, function (err, fields, files) {  //解析form请求数据 err错误 fields文本域 files文件域
            //fields 文本域  输入框和radio的数据都在里面
            //files  文件域
            var extname = path.extname(files.pic.name);  //获取扩展名
            var tt = sd.format(new Date(), 'YYYYMMDDHHmmss');  //获取时间
            var oldpath = __dirname + "/" + files.pic.path;  //获取原始本地路径
            var newpath = __dirname + "/upload/" + tt + extname;  //获取新路径
            fs.rename(oldpath,newpath,function (err) {  //修改上传文件的名称
                if (err) {
                    throw err
                } else {
                    res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"})
                    res.end("改名成功")
                }
            })
        })
    }
}).listen(3000, "127.0.0.1");