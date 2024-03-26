<template>
  <Layout title="Список сделок">
    <transactions_List />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import transactions_List from '@/components/transactions_List/transactions_List';

export default {
  name: 'Transactions',
  components: {
    Layout,
    transactions_List,
  }
}
</script>
