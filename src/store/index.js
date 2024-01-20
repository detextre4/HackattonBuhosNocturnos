import { createStore } from 'vuex'

const store = createStore({
  state: {
    drawer: false,
    navbarTabs: [
      {
        name: "hero",
        active: false
      },
      {
        name: "about",
        active: false
      },
      {
        name: "roadMap",
        active: false
      },
      {
        name: "collection",
        active: false
      },
      {
        name: "benefits",
        active: false
      },
      {
        name: "faq",
        active: false
      }
    ]
  },
  mutations: {
    setDrawer(state, value) { state.drawer = value },
    setNavbarTabs(state, name) {
      const element = state.navbarTabs.find(e => e.name === name)
      if (element.active) return

      state.navbarTabs.forEach(e => e.active = false)
      element.active = true
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {},
})

export default store
