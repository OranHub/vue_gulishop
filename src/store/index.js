import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home.js'
import users from './users.js'
import search from './search.js'

const state = {

}

const mutations = {
    
}

const actions = {
    
}

const getters = {
    
}









const store = new Vuex.Store({
    state,mutations,actions,getters,
    modules:{
        home,
        users,
        search
    }
})



export default store