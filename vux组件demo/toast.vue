<template>
  <div>
    <div style="padding:15px;">
      <x-button @click.native="showPosition('top')" type="primary">Top</x-button>
      <x-button @click.native="showPosition('middle')" type="primary">Middle</x-button>
      <x-button @click.native="showPosition('bottom')" type="primary">Bottom</x-button>
      <x-button @click.native="showPosition('')" type="primary">Default</x-button>  
    </div>
<toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">{{ $t('Basic Usage') }}</toast>
   


    

    
  </div>
</template>



<script>
import { Toast, Group, XSwitch, XButton } from 'vux'
export default {
  components: {
    Toast,
    Group,
    XSwitch,
    XButton
  },
  methods: {
    showPosition (position) {
      this.position = position
      this.showPositionValue = true
      console.log('点击')
    },
    onHide () {
      console.log('on hide')
    },
    onChange (val) {
      const _this = this
      if (val) {
        this.$vux.toast.show({
          text: 'Hello World',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
            _this.show9 = false
          }
        })
      } else {
        this.$vux.toast.hide()
      }
    }
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      position: 'default',
      showPositionValue: false
    }
  }
}
</script>
