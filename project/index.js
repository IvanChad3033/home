import api from './api';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items: state => state.items,
    itemsByKey: state => state.items.reduce((res, cur) => {
      res[cur['id_buyer']] = cur;
      return res;
    }, {}),
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    addItem: (state, item) => {
      state.items.push(item);
    },
    removeItem: (state, idRemove) => {
      state.items = state.items.filter(({ id_buyer }) => id_buyer !== idRemove);
    },
    updateItem: (state, updateItem) => {
      const index = state.items.findIndex(item => +item.id === +updateItem.id);
      state.items[index] = updateItem;
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.groups();
      const items = await response.json();
      commit('setItems', items)
    },
    removeItem: async ({ commit }, id_buyer) => {
      const idRemovedItem = await api.remove( id_buyer );
      commit('removeItem', idRemovedItem);
    },
    addItem: async ({ commit }, {buyer_name}) => {
      const item = await api.add({ buyer_name});
      commit('addItem', item);
    },
    updateItem: async ({ commit }, {id_buyer, buyer_name}) => {
      const item = await api.update({id_buyer, buyer_name});
      commit('updateItem', item);
    }
  },
}
