<template>
  <div >
   	<div class="back">
			<a  @click='back'>X</a>
		</div>
   
   <div class="con">
   	文章详情
   </div>
   	
  </div>
</template>

<script>
export default {
  data () {
    return {
    	
    }
  },
   components:{
// 	informationCentreList
  },
  methods:{
  	back(){
//		this.$router.go(-1)
			 history.back()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.back {
		position: fixed;
		height: 50px;
		line-height: 50px;
		background: white;
		width: 100%;
		z-index: 999;
	}
	.con{
		padding-top: 70px;
	}
</style>
