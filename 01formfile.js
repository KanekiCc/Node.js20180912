//formidable
var http = require("http"); //http 服务器
var formidable = require("formidable"); //处理form表单的请求数据
var util = require("util"); //实用工具
http.createServer=((req,res)=>{
    if(req.url=="/dopost" && req.method.toUpperCase()=="POST"){
        var form = new formidable.IncomingForm()
        form.uploadDir="./upload"
        form.parse(req,function(err,fields,file){
            if(err){
                throw err
            }
            //fields 文件域
            console.log(fields);
            console.log(file);
            res.end("success")
        })
        /* 获取到路径
        *  获取到扩展名
        *  加上一个时间窗
        *  fs rename 修改名称
        *  完成  上传文件
        *
        *
        * */
    }

}).listen(3000,"127.0.0.1");