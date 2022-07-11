var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use('/', express.static('dist'))//设置文件路径
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/dist/" + "app.html" );
})
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else
      next();
})


app.post('http://192.168.2.111:8090/process',function (req, res) {
   res.writeHead(200, {
    'content-type': 'text/plain;charset=utf8'
   });
  res.end(JSON.stringify({"first_name":"徐佳佳"}));
})
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
