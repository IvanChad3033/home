export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('transactions/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['transactions/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('transactions/removeItem', id);
}

export const addItem = (store, {photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass}) => {
  const { dispatch } = store;
  dispatch('transactions/addItem', {photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass});
}

export const updateItem = (store, { id, photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass}) => {
  const { dispatch } = store;
  dispatch('transactions/updateItem', { id, photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass});
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['transactions/itemsByKey'][id] || {};
}
