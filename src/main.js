import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import CarouseList from '@/components/CarouseList'
import store from '@/store'
import './api/index'
import  'swiper/css/swiper.css'

//引入mock模拟的接口
import  '@/mock/mockServer'
/* import {reqBaseCategoryList} from '@/api'
reqBaseCategoryList() */

Vue.component('TypeNav',TypeNav)
Vue.component('CarouseList',CarouseList)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
