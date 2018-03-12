<template>
	<div>
		<!--资讯中心文章列表-->
		<informationCentreList v-for="(item, index) in loanList" :v='item' :key='index'></informationCentreList>
		<!--文章下拉加载中文提示-->
		<div class="pull" v-if="isTip">{{tip}}</div>
		<div class="pullLoad" v-else>
			<img src="@/assets/loading.gif" alt="" /><span>加载中</span>
		</div>

	</div>
</template>

<script>
	import informationCentreList from '@/components/informationCentreList'

	export default {
		data() {
			return {
				//存请求到的数据
				loanList: [],
				tip: '↑上拉加载更多',
				//请求参数，初始化为2
				page_num: 2,
				//文章下拉加载中文提示 true 为'↑上拉加载更多'  或者  '暂无数据' ，false 为 '加载中'
				isTip: true
			}
		},
		components: {
			informationCentreList,
		},
		created() {
			this.getLoanList()
		},
		methods: {
			//将请求到的数据添加到this.loanList
			getLoanList() {
				this.$http.post('qwd/getArticleList', {
						classify_id: 4,
						page_num: this.page_num,
						page_size: 5
					}, {
						emulateJSON: true
					})
					.then((res) => {
						var date = res.body.content.article_list
						//在this.loanList中添加数据
						for(var i = 0; i < date.length; i++) {
							this.loanList.push(date[i])
						}
						//如果当前获取的数据长度为0，那么提示暂无数据
						if(date.length == 0) {
							this.tip = '暂无数据'
						}
						//显示提示文字  '↑上拉加载更多'  或者  '暂无数据'
						this.isTip = true
					})
			},
			//当滚轮距离底部为0时执行
			load() {
				//这个是请求的一个参数
				this.page_num++;
				//再次请求数据
				this.getLoanList()
				//文章下拉加载中文提示   改为 菊花和 '加载中'
				this.isTip = false;
			},
		},
		mounted() {
			var self = this
			//监听滚动事件，当滚轮距离底部为0时，执行load函数
			$(window).scroll(function() {　
				//垂直滚动条位置　
				var scrollTop = $(this).scrollTop();　
				//文档高度　
				var docHeight = $(document).height();　
				//可视区的高度　
				var windowHeight = $(this).height();
				var t=parseInt(docHeight - scrollTop - windowHeight);
				if( t== 0) {
					self.load();
				}
			});

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.pull {
		border-top: 1px solid #e9e9eb;
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 12px;
		color: gray;
	}
	
	.pullLoad {
		border-top: 1px solid #e9e9eb;
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 12px;
		color: gray;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.pullLoad span {
		padding-left: 5px;
	}
</style>