var http = require("http");
var ejs = require("ejs");
var fs = require("fs");
http.createServer((req,res)=> {
    fs.readFile("./index.ejs",(err,data)=>{
        var template=data.toString()
        var dictionary = {
            news:[
                {title:"新闻","count":10},
                {title:"关于","count":12},
                {title:"时间","count":16},
            ]
        }
        var html=ejs.render(template,dictionary)
        res.end(html)
    })

}).listen(3000,"127.0.0.1");