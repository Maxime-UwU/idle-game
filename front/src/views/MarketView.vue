<template>
  <div class="flex">
    <button
      class="w-42 h-20 bg-blue-500 rounded-xl p-4 text-white"
      @click="toggleMarket()"
    >
      Market
    </button>
    <div v-if="displayMarket" class="bg-[#161d3d] h-[100vh] w-[35rem] fixed right-0 flex items-center flex-col">
      <h1 class="text-4xl text-white font-bold mt-4">Magasin</h1>
      <MarketItemAdd />
      <MarketItemsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MarketItemsList from '../components/MarketItemsList.vue';
import MarketItemAdd from '../components/MarketItemAdd.vue';

const displayMarket = ref(false);

const toggleMarket = () => {
  displayMarket.value = !displayMarket.value;
};
</script>

<style scoped>

</style>