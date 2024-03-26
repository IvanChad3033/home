export const fetchItems = ( store ) => {
  const { dispatch } = store;
  dispatch('buyer_names/fetchItems');
};

export const selectItems = ( store ) => {
  const { getters } = store;
  return getters['buyer_names/items']
}

export const removeItem = ( store, id_buyer ) => {
  const { dispatch } = store;
  dispatch('buyer_names/removeItem', id_buyer);
}

export const addItem = ( store, { buyer_name} ) => {
  const { dispatch } = store;
  dispatch('buyer_names/addItem', { buyer_name});
}

export const updateItem = ( store, { id_buyer, buyer_name}) => {
  const { dispatch } = store;
  dispatch('buyer_names/updateItem', { id_buyer, buyer_name});
}

export const selectItemById = (store, id_buyer) => {
  const { getters } = store;
  return getters['buyer_names/itemsByKey'][id_buyer] || {};
}
