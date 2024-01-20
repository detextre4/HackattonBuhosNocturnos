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
    ],
    loader: false,
  },
  mutations: {
    setDrawer(state, value) { state.drawer = value },
    setLoader(state, value) { state.loader = value },
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
    pagination: () => ({items, currentPage, itemsPerPage, search, filterA}) => {
      let filters = [...items]
  
      // search
      if (search) filters = filters.filter(data => data.name.includes(search))
      // filter A (tier)
      if (filterA) filters = filters.filter(data => data.tier === filterA)
  
      return filters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    }
  },
  modules: {},
})

export default store
