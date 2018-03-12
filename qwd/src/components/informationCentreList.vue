<template>
	<div>
		<keep-alive>
		<router-link :to="{name:'detail'}" >
			<section   @click='isLook'>
				<div class="left">
					<div class="title" :class="{ looked: islook }">{{v.artical_title}}</div>
					<div class="date" :class="{ looked: islook }">{{timeFormat(v.update_time)}}</div>
				</div>
				<img :src='v.cover_img_url' alt="" />
			</section>
		</router-link>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				islook:false
			}
		},
		props: ['v'],
		methods: {
			timeFormat(timestamp) {
				var time = new Date(timestamp);
				var year = time.getFullYear();
				var month = time.getMonth() + 1;
				var date = time.getDate();
				var hours = time.getHours();
				var minutes = time.getMinutes();
				var seconds = time.getSeconds();
				return year + '/' + this.add0(month) + '/' + this.add0(date)
			},
			add0(m) {
				return m < 10 ? '0' + m : m
			},
			isLook(){
				console.log(this.islook)
				this.islook=true;
			}
		}
	}
</script>

<style scoped>
	section {
		font-size: 15px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		height: 100px;
		border-top: 1px solid #e9e9eb;
	}
	
	section img {
		width: 90px;
		height: 70px;
	}
	
	.left {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		height: 80px;
		width: 66%;
		color: #4d6072;
	}
	
	.split {
		background: gainsboro;
		height: 1px;
	}
	.looked{
		color:#95a1ab !important;
	}
</style>