<template>
	<div>
		确认框<button @click='showPlugin'>点击</button>
	</div>
</template>

<script>
	import { Confirm } from 'vux'
	import { ConfirmPlugin } from 'vux'
	import Vue from 'vue'
	Vue.use(ConfirmPlugin)
	export default {
		data() {
			return {
			}
		},
		methods: {
			showPlugin() {
				this.$vux.confirm.show({
					title: '提示',
					content: '您还没有登录~去登录解锁更多惊喜',
					confirmText: '去登陆',
					cancelText: '再看看',
					onShow() {
						console.log('plugin show')
						console.log(this)
					},
					onHide() {
						console.log('plugin hide')
					},
					onCancel() {
						console.log('plugin cancel')
					},
					onConfirm() {
						console.log('plugin confirm')
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
	/*取消*/
	.weui-dialog__btn_default {
		font-size: 14px;
		color: red !important;
	}
	/*确定*/
	.weui-dialog__btn_primary {
		color: red !important;
				font-size: 14px;
	}
</style>