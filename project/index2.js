import api from './api';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items: state => state.items,
    itemsByKey: state => state.items.reduce((res, cur) => {
      res[cur['id']] = cur;
      return res;
    }, {}),
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    setItem: (state, item) => {
      state.items.push(item);
    },
    removeItem: (state, idRemove) => {
      state.items = state.items.filter(({ id }) => id !== idRemove)
    },
    updateItem: (state, updateItem) => {
      const index = state.items.findIndex(item => +item.id === +updateItem.id);
      state.items[index] = updateItem;
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.students();
      const items = await response.json();
      commit('setItems', items)
    },
    removeItem: async ({ commit }, id) => {
      const idRemovedItem = await api.remove( id );
      commit('removeItem', idRemovedItem);

    },
    addItem: async ({ commit }, { photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass }) => {
      const item = await api.add({ photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass })
      commit('setItem', item)
    },
    updateItem: async ({ commit }, { id, photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass}) => {
      const item = await api.update({ id, photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass});
      commit('updateItem', item);
    }
  },
}
