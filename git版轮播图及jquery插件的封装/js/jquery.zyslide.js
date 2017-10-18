
(function($){
		var states=[
		{
			zIndex:1,
			width:120,
			height:150,
			top:69,
			left:66,
			zOpacity:0.2
		},
		{
			zIndex:2,
			width:130,
			height:170,
			top:59,
			left:0,
			zOpacity:0.5
		},
		{
			zIndex:3,
			width:170,
			height:218,
			top:35,
			left:110,
			zOpacity:0.7
		},
		{
			zIndex:4,
			width:224,
			height:288,
			top:0,
			left:285,
			zOpacity:1
		},
		{
			zIndex:3,
			width:170,
			height:218,
			top:35,
			left:514,
			zOpacity:0.7
		},
		{
			zIndex:2,
			width:130,
			height:170,
			top:59,
			left:624,
			zOpacity:0.5
		},
		{
			zIndex:1,
			width:120,
			height:150,
			top:69,
			left:88,
			zOpacity:0.2
		},
	]
	
	var lis=$('.box li');
	function move(){
		lis.each(function(index,ele){
			var state=states[index];
			$(ele).css('z-index',state.zIndex).finish().animate(state,1000).find('img').css('opacity',state.zOpacity)
		})
	}
	move();
	
	function next(){
		states.unshift(states.pop());
		move();
	}
	function prev(){
		states.push(states.shift());
		move();
	}
	$('.prev').click(()=>{prev()})
	$('.next').click(()=>{next()})
	
	var time;
	function auto(){
		time=setInterval(next,1000)
	}
	auto();
	
	$('section').hover(()=>{
		clearInterval(time);
	},()=>{
		time=setInterval(next,1000)
		next();
	})

})(jQuery);
