<template>
	<div class="wrap">
		<h4>资讯</h4>
		<div class="head">
			<router-link :to="{name:'informationCentre'}">
				<div>贷款攻略</div>
			</router-link>
			<router-link :to="{name:'informationCentre'}" >
				<div>资讯中心</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import bus from '@/../static/js/bus.js'
	export default {
		data() {
			return {

			}
		},
		created() {
			bus.$emit('tell-show', true)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.head {
		display: flex;
		flex-flow: row nowrap;
		height: 75px;
		justify-content: space-between;
		align-items: center;
	}
	
	.head>a {
		display: block;
		width: 47%;
		text-align: center;
		line-height: 75px;
		background: pink;
		height: 75px;
	}
	
	h4 {
		margin-bottom: 20px;
	}
	
	.wrap {
		padding: 2px 10px 0 10px;
	}
	
	.vux-tab .vux-tab-item {
		color: #95a1ab !important;
	}
</style>