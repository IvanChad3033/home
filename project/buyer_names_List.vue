<template>
  <div :class="$style.root">
    <Table
        :headers="[
          {value: 'id_buyer', text: 'ID'},
          {value: 'buyer_name', text: 'Имя покупателя'},
          {value: 'control', text: 'Действие'},
        ]"
        :items="items"
    >
      <template v-slot:control="{ item }">
        <Btn @click="onClickEdit(item.id_buyer)" theme="info">Изменить</Btn>
        <Btn @click="onClickRemove(item.id_buyer)" theme="danger">Удалить</Btn>
      </template>
    </Table>
    <RouterLink :to="{ name: 'Buyer_names_Edit' }">
      <Btn :class="$style.create" theme="info">Создать</Btn>
    </RouterLink>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { selectItems, removeItem, fetchItems  } from '@/store/buyer_names/selectors'
import Table from '@/components/Table/Table';
import Btn from '@/components/Btn/Btn';

export default {
  name: 'buyer_names_List',
  components: {
    Btn,
    Table,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      fetchItems(store);
    });
    return {
      items: computed(() => selectItems(store)),
      onClickRemove: (id_buyer) => {
        const isConfirmRemove = confirm('Вы действительно хотите удалить запись?')
        if (isConfirmRemove) {
          removeItem(store, id_buyer)
        }
      },
      onClickEdit: (id_buyer) => {
        router.push({ name: 'Buyer_names_Edit', params: { id_buyer } })
      }
    }
  },
}

</script>

<style module lang="scss">
.root {
  .create {
    margin-top: 16px;
  }
}
</style>
