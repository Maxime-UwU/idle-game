<template>
  <div class="flex">
    <button
      class="w-42 h-20 bg-blue-500 rounded-xl p-4 text-white"
      @click="toggleMarket()"
    >
      Magasin
    </button>
    <button
      class="w-42 h-20 bg-blue-500 rounded-xl p-4 text-white"
      @click="toggleFactory()"
    >
      Usines
    </button>
    <div v-if="displayMarket" class="bg-[#161d3d] h-[100vh] w-[35rem] fixed right-0 flex items-center flex-col">
      <h1 class="text-4xl text-white font-bold mt-4">Magasin</h1>
      <MarketItemAdd />
      <MarketItemsList />
    </div>
    <div v-if="displayFactories" class="bg-[#161d3d] h-[100vh] w-[35rem] fixed right-0 flex items-center flex-col">
      <h1 class="text-4xl text-white font-bold mt-4">Usines</h1>
      <Factories></Factories>
    </div>
    <div>
    <TheWelcome />
  </div>
    
  </div>

</template>

<script setup lang="ts">
import TheWelcome from '../components/HomeIdle.vue'
import Factories from '../components/CreateFactory.vue'
import { ref } from 'vue';
import MarketItemsList from '../components/MarketItemsList.vue';
import MarketItemAdd from '../components/MarketItemAdd.vue';

const displayMarket = ref(false);
const displayFactories = ref(false);

const toggleMarket = () => {
  displayMarket.value = !displayMarket.value;
  displayFactories.value  = false;
};

const toggleFactory = () => {
  displayFactories.value = !displayFactories.value;
  displayMarket.value = false;
}
</script>

<style scoped>

</style>