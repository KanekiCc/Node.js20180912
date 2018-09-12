var ejs =require("ejs");  //加载ejs模板引擎 处理html数据
/*
* <%=%> 输出数据
* <%#%> 注释
* <%_%> 删除首位空格
* <%-%> 非转义字符
* */
var string = "今天买了一个iphone<%= a %> <%# rtrt %>"
var data={
    a:9
}
var html = ejs.render(string,data)  // render 渲染  首个参数是html 第二个参数是渲染数据
console.log(html);