// 请求页面布局的路由

// 创建一个路由
var express = require('express');
var router = express.Router();

router.get('/guonei',(req,res)=>{
	request('http://api.avatardata.cn/TouTiao/Query?key=b49c3cb47c9b49b99d3d6d5084603d07&type=guonei', function (err, res, body) {
	  if (!err && res.statusCode == 200) {
	  	var data=body;
	  	console.log(data)
//	  		res.json(JSON.parse(body))
	  }
	});
})	

// 导出路由对象
module.exports = router;