
// 加载模块
var express = require('express');
var app = express();
app.use(express.static('www'));
var request=require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

var template = require('art-template');

//新闻类型
var sort=['top','guonei','guoji','yule','tiyu','junshi','keji','caijing','shishang'];
//首页新闻左边部分数据
request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=top', function (err, res, body) {
  if (!err && res.statusCode == 200) {
  	app.get('/data/rough/top',(req,res)=>{
  		res.json(JSON.parse(body))
  	})
  }
});
//首页新闻右边部分数据
request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=shehui', function (err, res, body) {
  if (!err && res.statusCode == 200) {
  	app.get('/right',(req,res)=>{
  		res.json(JSON.parse(body))
  	})
  }
});

//['top','guonei','guoji','yule','tiyu','junshi','keji','caijing','shishang']这些新闻接口访问时候，返回数据
app.get('/top',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=top', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/guonei',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=shehui', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/guoji',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=guoji', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/yule',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=yule', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/tiyu',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=tiyu', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/junshi',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=junshi', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/keji',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=keji', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/caijing',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=caijing', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})
app.get('/shishang',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=shishang', function (err,  response, body) {
	  if (!err &&  response.statusCode == 200) {
	  	res.json(JSON.parse(body))
	  }
	});
})

app.get('/login',(req,res)=>{
	var render=require('./views/login');
	var htmlStr = render({});
	res.status(200).send(htmlStr);
})
app.get('/register',(req,res)=>{
	var render=require('./views/register');
	var htmlStr = render({});
	res.status(200).send(htmlStr);
})

app.listen(3000,function(){
	console.log('服务器开启成功...');
});
