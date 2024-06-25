export default {
  namespaced: true,
  state: {
    themeColor: '#409EFF'
  },
  mutations: {
    setThemeColor (state, themeColor) {
      state.themeColor = themeColor
    }
  },
  actions: {}
}
