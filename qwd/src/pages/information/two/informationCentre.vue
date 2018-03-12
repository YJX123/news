<template>
	<div class="wrap">

		<!--<div class="back">
			<a @click='back'>X</a>
		</div>-->
		<div class="head">
			<div class="title">资讯中心</div>
			<img src="@/assets/tatoo.png" alt="" />
		</div>

		<!--tabb-->
		<tab class="shoptab" bar-active-color="#118e95" custom-bar-width="1.5rem" active-color="#118e95">
			<tab-item :selected="Select" @click.native="isLoan">贷款</tab-item>
			<tab-item @click.native="isCreditCard">信用卡</tab-item>
			<tab-item @click.native="isMoneyManagement">理财</tab-item>
		</tab>

		<keep-alive>
			<component :is="currentView" :id="id" :lolist='listLoan'></component>
		</keep-alive>
	</div>
</template>

<script>
	//导入vue空实例，用于非父子关系的两个组件之间通信
	import bus from '@/../static/js/bus.js'
	import loan from '@/pages/information/two/loan'
	import creditCard from '@/pages/information/two/creditCard'
	import moneyManagement from '@/pages/information/two/moneyManagement'
	import { Tab, TabItem } from 'vux'

	import Vue from 'vue'
	import VueScroller from 'vue-scroller'
	Vue.use(VueScroller)
	export default {
		data() {
			return {
				Select: true,
				currentView: 'loan',
				id: '',
				listLoan:[],
				listcreditCard:[],
				listmoneyManagement:[],
			}
		},
		components: {
			Tab,
			TabItem,
			moneyManagement,
			creditCard,
			loan
		},
		methods: {
			isLoan() {
				this.currentView = 'loan';
			},
			isCreditCard() {
				this.currentView = 'creditCard';

			},
			isMoneyManagement() {
				this.currentView = 'moneyManagement';
			},
			back() {
				this.$router.go(-1)
			}
		},
		created() {
			//进入这个页面，触发isShow方法,将页面的底部导航条隐藏
			bus.$emit('isShow', false)
//			console.log('kkk')
			//获取数据
			
			this.$http.post('qwd/getArticleList',{
				classify_id:2,
				page_num:2,
				page_size:5
			},{emulateJSON:true})
				.then((res)=>{
					this.listLoan=res.body.content.article_list;
				})
			this.$http.post('qwd/getArticleList',{
				classify_id:4,
				page_num:2,
				page_size:5
			},{emulateJSON:true})
				.then((res)=>{
					this.listmoneyManagement=res.body.content.article_list;
				})
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.vux-tab {
		width: 50%;
	}
	
	.wrap {
		padding: 0 3%;
		background-color: #fff;
	}
	
	.head {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		/*padding: 32px 0;*/
		height: 100px;
	}
	
	.head .title {
		font-size: 30px;
		font-weight: 500;
color: #4d6072;
	}
	
	.head img {
		width: 80px;height: 80px;
	}
	
	.back {
		position: fixed;
		height: 50px;
		line-height: 50px;
		background: white;
		width: 100%;
		z-index: 999;
	}
	.vux-tab .vux-tab-item{
		font-size: 12px;
font-weight: 500;
line-height: 40px;
background: #FFFFFF;
	}
	
	
	
	
</style>