<template>
  <div :class="$style.root">
    <div v-if="form.id" :class="$style.item">
      <div :class="$style.label">
        <label for="id">ID</label>
      </div>
      <input v-model="form.id" disabled :class="$style.input"  id="id" placeholder="id" type="text">
    </div>
    <div :class="$style.item">
      <div :class="$style.label">
        <label for="photo_of_the_receipt">Фото изображения</label>
      </div>
      <input v-on:change ="form.photo_of_the_receipt" :class="$style.input"  id="photo_of_the_receipt" placeholder="Фото изображения" type="file">
    </div>
    <div :class="$style.item">
      <div :class="$style.label">
        <label for="transaction_number">Номер сделки</label>
      </div>
      <input v-model="form.transaction_number" :class="$style.input" id="transaction_number" placeholder="Номер сделки" type="text">
    </div>
    <div :class="$style.item">
      <div :class="$style.label">
        <label for="composition_of_goods">Состав товара</label>
      </div>
      <input v-model="form.composition_of_goods" :class="$style.input" id="composition_of_goods" placeholder="Состав товара" type="text">
    </div>
    <div :class="$style.item">
      <div :class="$style.label">
        <label for="cargo_mass">Состав товара</label>
      </div>
      <input v-model="form.cargo_mass" :class="$style.input" id="cargo_mass" placeholder="Масса товара" type="text">
    </div>
    <div :class="$style.item">
      <div :class="$style.label">
        <label for="buyer_name">Имя покупателя</label>
      </div>
      <select v-model="form.buyer_name" :class="$style.select" name="buyer_name" id="buyer_name">
        <option v-for="({ buyer_name, id_buyer}) in groupList" :key="id_buyer" :value="buyer_name">
          {{ buyer_name }}
        </option>
      </select>
    </div>
    <div :class="$style.item">
      <Btn @click="onClick" :disabled="!isValidForm" theme="info">Сохранить</Btn>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onBeforeMount, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

//import { selectItemById, fetchItems, selectItems as selectGroups, fetchItems as fetchGroups } from '@/store/transactions/selectors';
import { selectItemById, fetchItems } from '@/store/transactions/selectors';
import { selectItems as selectGroups, fetchItems as fetchGroups } from '@/store/buyer_names/selectors';
import Btn from '@/components/Btn/Btn'; // Импортировал Btn

export default {
  name: 'transactions_Form',
  props: {
    id: { type: String, default: '' },
  },
  components: {
    Btn,
  },
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    const groupList = computed(() => selectGroups(store))
    const form = reactive({
      id: '',
      photo_of_the_receipt: '',
      transaction_number: '',
      composition_of_goods: '',
      cargo_mass: '',
      buyer_name: '',
    });

    onBeforeMount(() => {
      fetchItems(store);
      fetchGroups(store);
    });

    watchEffect(() => {
      const student = selectItemById( store,  props.id );
      Object.keys(student).forEach(key => {
        form[key] = student[key]
      })
    });

    return {
      groupList,
      form,
      isValidForm: computed(() =>  !!(form.photo_of_the_receipt && form.transaction_number && form.composition_of_goods && form.cargo_mass && form.buyer_name)),
      onClick: () => {
        context.emit('submit', form);
        router.push({ name: 'Transactions' })
      }
    }
  },
}
</script>

<style module lang="scss">
.root {
  padding-top: 30px;
  max-width: 900px;

  .item {
    display: flex;
    align-items: center;

    & + .item {
      margin-top: 15px;
    }
  }

  .label {
    flex: 0 0 150px
  }

  .input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  .select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    appearance: none;
  }
}
</style>
