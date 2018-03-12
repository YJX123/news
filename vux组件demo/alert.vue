<template>
  <div>
    <button @click="showModule">点击</button>
  </div>
</template>



<script>

import  { AlertPlugin,AlertModule } from 'vux'
import Vue from 'vue'
Vue.use(AlertPlugin)
export default {
  data () {
    return {
    }
  },
  methods: {
    showModule () {
      AlertModule.show({
        title: '提示',
        content: '您的信用信息太少，小贷无法给您推荐适合的产品。请先完善信息',
        buttonText:'知道了',
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
  }
}
</script>
<style>
	/*标题*/
	.weui-dialog__hd {
		text-align: left !important;
		color: black;
		padding: 0.8rem 1.6rem 0.8rem !important;
	}
	/*内容*/
	.weui-dialog__bd {
		text-align: left !important;
		color: gray;
		font-size: 12px;
		padding: 0.8rem 1.6rem 0.8rem !important;
	}
	/*确定*/
	.weui-dialog__btn_primary {
		color: red !important;
				font-size: 14px;
	}
</style>