<template>
  <div >
   	
   	<div v-for="(v,i) in items" :key='i'>{{v}}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    	items:[1,2,3]
    }
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	

</style>
