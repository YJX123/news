<template>
  <div id="app">
    
    
    <router-view/>
    
    <!--底部导航-->
     <tabbar v-show='isShow'>
  	   <tabbar-item  link='/recommend'  :selected="Select">
    			<img  src="./assets/my.png" slot='icon'/>
    			<span slot='label' class="ac">推荐</span>
    		</tabbar-item>
    		<tabbar-item  link='/creditAssistant'>
    			<img  src="./assets/my.png" slot='icon'/>
    			<span slot='label'>信用助手</span>
    		</tabbar-item>
    		<tabbar-item  link='/Information'>
    			<img  src="./assets/my.png" slot='icon'/>
    			<span slot='label'>资讯</span>
    		</tabbar-item>
    		<tabbar-item  link='/mine'>
    			<img  src="./assets/my.png" slot='icon'/>
    			<span slot='label'>我的</span>
    		</tabbar-item>
    </tabbar>
    
  </div>
</template>

<script>
import bus from '../static/js/bus.js'
	import { Tabbar, TabbarItem} from 'vux'
export default {
	components:{
		Tabbar,
		TabbarItem
	},
	data(){
		return{
			isShow:true,
			Select:true
		}
	},
	created() {
			//是否显示底部导航条
			bus.$on('isShow', (value) => {
				this.isShow = value;
			})
	},
	watch: {
			// 路由变化 
			$route(to, from) {
				//当返回recommend 页面时候 显示底部的导航条
				if(to.path=='/recommend'){
					this.isShow=true
				}
				if(to.path=='/creditAssistant'){
					this.isShow=true
				}
				if(to.path=='/Information'){
					this.isShow=true
				}
				if(to.path=='/mine'){
					this.isShow=true
				}
			}
		},
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
 .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
 	color:deeppink !important
 }
 a{
 	color: black;
 }
</style>
