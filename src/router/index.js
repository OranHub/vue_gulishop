import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

Vue.use(VueRouter)

//解决搜素栏重复回车报错
const originPush = VueRouter.prototype.push   
const originReplace = VueRouter.prototype.replace   
//可以大胆的去修改原型的push，让原型的push指向另外一个函数
VueRouter.prototype.push = function(location,onResolved,onRejected){
  //location就是我们调用 this.$router.push，传递过来的对象
  // {
  //   name: "search",
  //   params: { keyword: this.keyword || undefined},
  //   query: { keyword1: this.keyword.toUpperCase() },
  // }
  if(onResolved === undefined && onRejected === undefined){
    //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
    return originPush.call(this,location).catch(() => {})
  }else{
    //证明调用的时候传递了成功或者失败的回调，或者都有
    return originPush.call(this,location,onResolved,onRejected)
  }
}


VueRouter.prototype.replace = function(location,onResolved,onRejected){
  //location就是我们调用 this.$router.push，传递过来的对象
  // {
  //   name: "search",
  //   params: { keyword: this.keyword || undefined},
  //   query: { keyword1: this.keyword.toUpperCase() },
  // }
  if(onResolved === undefined && onRejected === undefined){
    //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
    return originReplace.call(this,location).catch(() => {})
  }else{
    //证明调用的时候传递了成功或者失败的回调，或者都有
    return originReplace.call(this,location,onResolved,onRejected)
  }
}

const router = new VueRouter({    
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search'
        },
        {
            path:'/',
            redirect:'/home'
        }
]
})
export default router