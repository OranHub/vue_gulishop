import {reqSearchInfo} from '@/api'
const state = {
    searchInfo:{}
}

const mutations = {
    SAVE_SEARCHINFO(state,searchInfo){
        if(searchInfo){
            state.searchInfo = searchInfo
        }
    }
}

const actions = {
    async get_searchInfo({commit}){
      const result = await reqSearchInfo()
      if(result.code===200){
        commit('SAVE_SEARCHINFO',result.data)
      }
    },
}

const getters = {
    goodsList(state){
        return state.searchInfo.goodsList || []
    },
    attrsList(state){
        return state.searchInfo.attrsList || []  //是为了后期不出现假报错，所以给[]
      },
    trademarkList(state){
        return state.searchInfo.trademarkList || []
      }
}



export default{state,mutations,actions,getters}