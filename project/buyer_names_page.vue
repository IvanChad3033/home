<template>
  <Layout title="Список покупателей">
    <buyer_names_List />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import buyer_names_List from '@/components/buyer_names_List/buyer_names_List';

export default {
  name: 'buyer_names_page',
  components: {
    Layout,
    buyer_names_List,
  }
}
</script>
