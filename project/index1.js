import { createStore } from 'vuex'
import transactions from './transactions';
import buyer_names from './buyer_names';
export default createStore({
  modules: {
    transactions,
    buyer_names,
  },
  state: {},
  mutations: {},
  actions: {},
})
