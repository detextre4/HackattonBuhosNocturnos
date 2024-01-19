import { createStore } from 'vuex'

const store = createStore({
  state: {
    drawer: false,
    navbarTabs: [
      "home",
      "about",
      "golden",
      "nft",
      "benefice",
      "faq",
    ],
    loader: false,
  },
  mutations: {
    setDrawer(state, value) { state.drawer = value },
    setLoader(state, value) { state.loader = value },
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
