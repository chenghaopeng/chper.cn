import { App } from '@/utils/api'
import { createStore } from 'vuex'

export default createStore({
  state: {
    currentApp: {},
    currentAppHref: ''
  },
  mutations: {
    setCurrentApp: (state, payload: { app: App }) => {
      state.currentApp = payload.app
      state.currentAppHref = payload.app?.href
    }
  },
  actions: {
  },
  modules: {
  }
})
