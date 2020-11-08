import { createStore } from 'vuex'

export default createStore({
  state: {
    fadeBck: false,
    bkgClass: '',
  },
  mutations: {
    removeFade(state) {
      state.fadeBck = false
    },
    setFade(state) {
      state.fadeBck = true
    },
    setBkgClass(state, bkg) {
      state.bkgClass = bkg
    },
  },
  actions: {},
  modules: {},
})
