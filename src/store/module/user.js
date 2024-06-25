export default {
  namespaced: true,
  state: {
    count: 1,
    count1: 11
  },
  mutations: {
    setcount (state, payload) {
      state.count = payload
    },
    setcount1 (state, payload) {
      state.count1 = payload
    }
  },
  actions: {
    setcountAction (context, payload) {
      context.commit('setcount', payload.count)
    },
    setcountAction1 (context, payload) {
      context.commit('setcount1', payload.count)
    }
  }
}
