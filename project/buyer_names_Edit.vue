<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <buyer_names_Form
        :id_buyer="id"
        @submit="onSubmit"
    />
  </Layout>
</template>

<script>
import {useStore} from 'vuex';

import {updateItem, addItem} from '@/store/buyer_names/selectors';
import Layout from '@/components/Layout/Layout';
import buyer_names_Form from '@/components/buyer_names_Form/buyer_names_Form';
export default {
  name: 'buyer_names_Edit',
  props: {
    id: String,
  },
  components: {
    Layout,
    buyer_names_Form,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id_buyer, buyer_name}) => id_buyer ?
          updateItem(store, { id_buyer, buyer_name}) :
          addItem(store,{buyer_name}),
    };
  }
}
</script>

