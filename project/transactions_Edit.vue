<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <transactions_Form @submit="onSubmit" :id="id"  />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/transactions/selectors';
import transactions_Form from '@/components/transactions_Form/transactions_Form';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'transactions_Edit',
  props: {
    id: String,
  },
  components: {
    Layout,
    transactions_Form,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass}) => id ?
          updateItem(store, { id, photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass}) :
          addItem(store, { photo_of_the_receipt, transaction_number, composition_of_goods, buyer_name, cargo_mass} )
    }
  }

}
</script>

