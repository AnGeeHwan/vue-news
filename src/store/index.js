import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions.js'

Vue.use(Vuex)
Vue.config.devtools = true;

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations,
  actions
})