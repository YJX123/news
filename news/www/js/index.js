//轮播图不自动轮播
$('.carousel').carousel({
	interval: 0
})
//左侧部分的新闻列表
$.get('/data/rough/top',(data)=>{
	var alldata=data.result.data;
	for(var i=0;i<data.result.data.length;i++){
		$('.block>.left').append(
			`
				<section class="part">
						<div class="part-left">
							<a><img src=${alldata[i].thumbnail_pic_s} /></a>
						</div>
						<div class="part-right">
							<a>
								<p class="title">${alldata[i].title}</p>
							</a>
							<p><span class="author_name">${alldata[i].author_name}</span>
								<span class="date pull-right">${alldata[i].date}</span></p>
						</div>
					</section>
			`
		)
		
	}
	//新闻图片hover事件
	$('.block .part-left a img').hover(function() {
		$(this).stop().animate({
			left: '-25px'
		}, 500)
	}, function() {
		$(this).stop().animate({
			left: '0'
		}, 500)
	})
})

//右侧部分的社会新闻轮播数据
$.get('/right',(data)=>{
	var alldata=data.result.data;
	for(var i=0;i<8;i++){
		$('#carousel-1 .content').find('.item').eq(i).append(
			`
				<img src=${alldata[i].thumbnail_pic_s}>
				<div class="tit"><a href="">${alldata[i].title}</a></div>
			`
		)
		
	}
})
//点击新闻分类中的导航a标签进行页面跳转
$('.news-list a').click(function(){
	var sort=['top','guonei','guoji','yule','tiyu','junshi','keji','caijing','shishang'];
	//i为a标签的索引
	var i=$(this).parent().index()
	//发送请求
	$.get('/'+sort[i],(data)=>{
		var alldata=data.result.data;
		//先把所有新闻清空
		$('.block>.left').html('');
		//加入指定新闻
		for(var i=0;i<data.result.data.length;i++){
			$('.block>.left').append(
				`
					<section class="part">
							<div class="part-left">
								<a><img src=${alldata[i].thumbnail_pic_s} /></a>
							</div>
							<div class="part-right">
								<a>
									<p class="title">${alldata[i].title}</p>
								</a>
								<p><span class="author_name">${alldata[i].author_name}</span>
									<span class="date pull-right">${alldata[i].date}</span></p>
							</div>
						</section>
				`
			)
			
		}
	})
})

