<template>
    <div class="relative mt-4">
        <div v-if="!toogleItem" class="w-full px-8 grid gap-6 grid-cols-3">
            <div @click="onItemClick(item)" class="bg-gray-600 p-4 rounded-xl cursor-pointer" v-for="item in allMarketItems" :key="item.id">
            <img v-if="item.ressource.name === 'wood'" src="../assets/planche.png">
            <img v-if="item.ressource.name === 'stone'" src="../assets/pierre.png">
                <p class="text-white">{{ 'Ressource : ' + item.ressource.name }}</p>
                <p class="text-white">{{ 'Quantité : ' + item.quantity }}</p>
                <p class="text-white">{{ 'Prix : ' + item.price }}</p>
            </div>
        </div>
        <div v-if="toogleItem && selectedItem">
      <div class="bg-gray-600 p-4 rounded-xl flex flex-row">
      <div>
        <img class="w-32" v-if="selectedItem.ressource.name === 'wood'" src="../assets/planche.png">
        <img class="w-32" v-if="selectedItem.ressource.name === 'stone'" src="../assets/pierre.png">
        <p class="text-white">{{ 'Ressource : ' + selectedItem.ressource.name }}</p>
        <p class="text-white">{{ 'Quantité disponible : ' + selectedItem.quantity }}</p>
        <p class="text-white">{{ 'Prix à l\'unité : ' + unityPrice }}</p>
        </div>
        <form class="flex flex-col items-center" clas @submit.prevent="onBuyItem()">
            <label class="text-white text-lg">Quantité à acheter</label>
          <input v-model="buyItem.buyQuantity" class="text-black w-20 h-12 rounded-xl px-4 mt-2" type="text">
            <p class="text-white text-lg mt-2">Total : {{ finalPrice }}</p>
            <button :disabled="!isValidBuy" name="price" type="submit" class="p-3 rounded-full disabled:bg-blue-800 bg-gradient-to-r enabled:from-sky-500 enabled:to-indigo-600 text-white font-semibold text-lg">Acheter</button>
        </form>
      </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import * as Market from '../api/market';
import { type MarketBody } from '../api/market';
import { type Ressource } from '../api/market';

const userId = '651d75c95c2ac5bb2ef05afb';

const allMarketItems = ref<any[]>([]);
let selectedItem: any | null = null;
let toogleItem = ref(false);

const buyItem = ref({
    userId: userId,
    buyQuantity: 0,
    buyPrice: 0,
    market: { userId: '', ressource: { name: '', quantity: 0, userID: '', lvl: 0 } as Ressource, quantity: 0 , price: 0 } as MarketBody,
});

const loadMarketItems = async () => {
  const marketItems = await Market.getAllMarket(userId);
  allMarketItems.value = marketItems.allMarkets;
  console.log(allMarketItems.value);
};

function onItemClick(item: any) {
  selectedItem = item;
  toogleItem.value = true;
  console.log('Item sélectionné : ' + JSON.stringify(item));
}

const unityPrice = computed(() => {
    if (selectedItem) {
    return (selectedItem.price / selectedItem.quantity).toFixed(2);
  }
});

const finalPrice = computed(() => {
    return (buyItem.value.buyQuantity * Number(unityPrice.value)).toFixed(2);
});

const isValidBuy = computed(() => {
    if (!buyItem.value.buyQuantity) {
        return false;
    }

        return buyItem.value.buyQuantity > 0 && buyItem.value.buyQuantity <= selectedItem.quantity;
});

function onBuyItem() {
    Market.buyItem(buyItem.value)
    console.log(buyItem.value)
}

onMounted(() => {
  loadMarketItems();
});
</script>

<style scoped>
</style>