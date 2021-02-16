import { App } from '@/utils/api'
import { createStore } from 'vuex'

export default createStore({
  state: {
    currentApp: {},
    currentAppHref: '',
    clickPosition: ''
  },
  mutations: {
    setCurrentApp: (state, payload: { app: App }) => {
      state.currentApp = payload.app
      state.currentAppHref = payload.app?.href
    },
    setClickPosition: (state, payload: { position: string }) => {
      state.clickPosition = payload.position
    }
  },
  actions: {
  },
  modules: {
  }
})
