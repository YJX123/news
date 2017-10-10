var exp = require('express');
var fs = require('fs');
var multer = require('multer');
var bodyP = require('body-parser');
var cooki = require('cookie-parser');

var app = exp();
app.use(cooki())


app.use(bodyP.urlencoded({
	extended: true
}));
app.listen(3000, () => {
	console.log('服务器开启了--------------')
})

//-----------------------注册------------

app.post('/user/register', (req, res) => {
	function setData() {
		var filename = `user/${req.body.username}.json`;
		fs.exists(filename, (err) => {
			if(err) {
				res.status(200).json({
					code: 1,
					msg: '这个用户名已经被注册过了'
				})
			} else {
				req.body.ip=req.ip;
				req.body.time=Date.now();
				fs.appendFile(filename, JSON.stringify(req.body), (err) => {
					if(!err) {
						res.status(200).json({
							code: 2,
							msg: '注册成功'
						})
					} else {
						res.status(200).json({
							msg: '数据写入失败'
						})
					}
				})
			}
		})
	}
	fs.exists('user', (ex) => {
		if(ex) {
			setData()
		} else {
			fs.mkdir('user', (err) => {
				if(err) {
					res.status(200).json({
						code: 0,
						msg: '创建用户文件失败'
					})
				} else {
					setData()
				}
			})
		}
	})
})

//------------------登录---------------

app.post('/user/login', (req, res) => {
	var filename = `user/${req.body.username}.json`;
	fs.exists(filename, (ex) => {
		if(ex) {
			fs.readFile(filename, (err, data) => {
				if(!err) {
					var user = JSON.parse(data);
					if(user.password == req.body.password) {
						var expires = new Date();
						expires.setMonth((expires.getMonth() + 1))
						res.cookie('username', req.body.username, {expires});
						res.status(200).json({
							code: 1,
							msg: '登录成功'
						})
					} else {
						res.status(200).json({
							code: 2,
							msg: '密码错误'
						})
					}
				} else {
					res.status(200).json({
						code: 3,
						msg: '文件读取失败'
					})
				}
			})
		} else {
			res.status(200).json({
				code: 0,
				msg: '请注册一个'
			})
		}
	})
})


//------------------提问--------------

app.post('/user/ask',(req,res)=>{
	var content=req.body.content;
	content=content.replace(/</g,'&lt;')
	if(req.cookies.username){
		function WriteQues(){
			var data=Date.now();
			var filename=`question/${data}.json`;
			req.body.username=req.cookies.username;
			req.body.time=data;
			req.body.ip=req.ip;
			fs.writeFile(filename,JSON.stringify(req.body),(err)=>{
				if(err){
					res.status(200).json({
						code:2,
						msg:'提问存入失败'
					})
				}
				else{
					res.status(200).json({
						code:1,
						msg:'提问成功'
					})
				}
			})
		}
		fs.exists('question',(ex)=>{
			if(ex){
				WriteQues();
			}
			else{
				fs.mkdir('question',(err)=>{
					if(!err){
						WriteQues();
					}
				})
			}
		})
	}
	else{
		res.status(200).json({
			code:0,
			msg:'登录异常，请登录'
		})
		return;
	}
})

//--------------退出登录--------

app.get('/user/out',(req,res)=>{
	res.clearCookie('username');
	res.status(200).json({
		code:1,
		msg:'退出成功'
	})
})


//------------中间件-------------

var strong=multer.diskStorage({
	destination:'./www/img',
	filename:function(req,file,cb){
		var filename=file.originalname.split('.');
		cb(null,req.cookies.username+'.'+filename[filename.length-1])
	}
})
var upload=multer({storage:strong});

app.post('/user/upload',upload.single('file'),(req,res)=>{
	res.status(200).json({
		code:1,
		msg:'图片上传成功'
	})
})

//-----------------读取问题信息----------

app.get('/user',(req,res)=>{
	fs.readdir('question',(err,files)=>{
//		if(!err){
//			files=file.reverse();
//			var questions=[];
//			for(var i=0;i<files.length;i++){
//				var file=files[i];
//				var filename='question/'+file[i];
//				var data=fs.readFileSync(filename);
//				var obj=JSON.parse(data);
//				questions.push(obj)
//			}
//			console.log(questions)
//			
//			res.status(200).json(questions)
//
//		}
		//递归
		var i=0;
		var questions=[];
		file=files.reverse();
		function readFile(){
			if(i<file.length){
				var filename='question/'+file[i];
				fs.readFile(filename,(err,data)=>{
					if(!err){
						var obj=JSON.parse(data);
						questions.push(obj);
						i++;
						readFile();
					}
				})
			}
			else{				
				res.status(200).json(questions)
			}
		}
		readFile();
	})
})

//-------------回答------------------

app.post('/user/answer',(req,res)=>{
	var content=req.body.content;
	content=content.replace(/</g,'&lt;')
	var question=req.cookies.question;
	var filename='question/'+question+'.json';
	fs.readFile(filename,(err,data)=>{
		if(!err){
			var obj=JSON.parse(data);
			if(!obj.answer){
				obj.answer=[];
				
			}
			req.body.ip=req.ip;
			req.body.time=Date.now();
			req.body.username=req.cookies.username;
			
			obj.answer.push(req.body);
		}
		fs.writeFile(filename,JSON.stringify(obj),(err)=>{
			if(!err){
				res.status(200).json({
					code:1,
					msg:'回答成功'
				})
			}
			else{
				res.status(200).json({
					code:0,
					msg:'回答失败'
				})
			}
		})
	})
	
//	var date=req.cookies.question.answer;
//	var old=fs.readFileSync(`./question/${date}.json`);
//	old=JSON.parse(old)
//	console.log(old)
//	console.log(date)
//	console.log(old.answer)
//	old.answer=date;
	
//	fs.writeFile(`./question/${date}.json`,JSON.stringify(req.body),(err)=>{})
})



//wxpress请求处理管线

function isLogin(req,res,next){
	if(req.cookies.username){
		next();
	}
	else{
		res.redirect('login.html');
	}
}

app.get('/ask.html',isLogin,(req,res,next)=>{
	next();
})
app.get('/answer.html',isLogin,(req,res,next)=>{
	next();
})
app.use(exp.static('www'));
