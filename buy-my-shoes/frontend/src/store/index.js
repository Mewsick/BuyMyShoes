import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    price: 0,
    description: '',
    size: '',
    condition: '',
    contactInfo: ''
  },
  mutations: {
    setTitle(state, payload) {
      state.title = payload
    },
    setPrice(state, payload) {
      state.price = payload
    },
    setDescription(state, payload) {
      state.description = payload
    },
    setSize(state, payload) {
      state.size = payload
    },
    setCondition(state, payload) {
      state.condition = payload
    },
    setContactInfo(state, payload) {
      state.contactInfo = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
