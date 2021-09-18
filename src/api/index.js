//引入我们自定义的myAxios
import myAxios from '@/api/service'
//import jsonp from 'jsonp'

//引入请求的基本路径
import {MY_BASE_URL} from '@/config'


/* //登录请求
export const reqLogin = (username,password)=> myAxios.post(`${BASE_URL}/login`,{username,password})

//获取商品列表请求
export const reqCategoryList = ()=> myAxios.get(`${BASE_URL}/manage/category/list`) */
export const reqBaseCategoryList = ()=> myAxios.get(`${MY_BASE_URL}/get/product/getBaseCategoryList`)


//mock获取列表请求
export const reqBannerList = ()=> myAxios.get(`/mock/banner`)

//mock获取列表请求
export const reqFloorList = ()=> myAxios.get(`/mock/floor`)

//mock获取search请求
export const reqSearchInfo = ()=> myAxios.get(`/mock/searchinfo`)
