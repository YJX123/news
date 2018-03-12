<template>
  <div class="wrap">
  	推荐页面
  </div>
</template>

<script>
	import bus from '../../../static/js/bus.js'
export default {
  data () {
    return {
    	msg:'ye'
    }
  },
  created(){
  	bus.$emit('tell-show',true)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	

</style>
