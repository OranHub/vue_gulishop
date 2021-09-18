import {reqBaseCategoryList,reqBannerList,reqFloorList} from '@/api'


const state = {
    reqCategoryList:[],
    reqBannerList:[],
    reqFloorList:[],

}
//保存发请求获得的数据到state
const mutations = {
    GET_REQCATEGORYLIST(state,reqCategoryList){
        if(reqCategoryList){
            state.reqCategoryList = reqCategoryList
        }
    },
    GET_REQBANNERLIST(state,reqBannerList){
        if(reqBannerList){
            state.reqBannerList = reqBannerList
        }
    },
    GET_REQFLOORLIST(state,reqFloorList){
        if(reqFloorList){
            state.reqFloorList = reqFloorList
        }
    },
}

const actions = {
    
    async get_reqcategorylist({commit}){
        const result = await reqBaseCategoryList()
        if (result.code===200) {
            commit('GET_REQCATEGORYLIST',result.data)
        }
    },
    async get_reqbannerlist({commit}){
        const result = await reqBannerList()
        if (result.code===200) {
            commit('GET_REQBANNERLIST',result.data)
        }
    },
    async get_reqfloorlist({commit}){
        const result = await reqFloorList()
        if (result.code===200) {
            commit('GET_REQFLOORLIST',result.data)
        }
    },
}

const getters = {
    
}

export default {state,mutations,actions,getters}
