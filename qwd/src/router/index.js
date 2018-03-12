import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/pages/recommend/recommend'
import creditAssistant from '@/pages/creditAssistant/creditAssistant'
import Information from '@/pages/information/information'
import mine from '@/pages/mine/mine'
import informationCentre from '@/pages/information/two/informationCentre'
import detail from '@/pages/information/two/detail'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/creditAssistant',
      component: creditAssistant
    },
    {
      path: '/Information',
      component: Information
    },
    {
      path: '/mine',
      component: mine
    },
    {
    	path:'/informationCentre',
    	name:'informationCentre',
    	component:informationCentre
    },
    {
    	path:'/detail',
    	name:'detail',
    	component:detail
    }
  ],
  
})
