<template>
  <div>
    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <x-button @click.native="demo01_index = 0">go to 0</x-button>
    <x-button @click.native="demo01_index = 1">go to 1</x-button>
    </div>
</template>

<script>
import { Swiper,XButton } from 'vux'

const baseList = [{
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}]

export default {
  components: {
    Swiper,
    XButton,
  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
  },
  data () {
    return {
      demo01_list: baseList,
      demo01_index: 0,
    }
  }
}
</script>

<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
