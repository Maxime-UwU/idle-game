<template>
    <div class="relative mt-4">
        <div class="w-full px-8 grid gap-6 grid-cols-3">
            <div class="bg-gray-600 p-4 rounded-xl cursor-pointer" v-for="(item, i) in allMarketItems" :key="i">
            <img v-if="item.ressource.name = 'bois'" src="../assets/planche.png">
                <p class="text-white">{{ 'Ressource : ' + item.ressource.name }}</p>
                <p class="text-white">{{ 'Quantité : ' + item.quantity }}</p>
                <p class="text-white">{{ 'Prix : ' + item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import * as Market from '../api/market';

const userId = '651d638002a411e2a5e30897'

const allMarketItems = ref<any[]>([]);

const loadMarketItems = async () => {
    const marketItems = await Market.getAllMarket(userId);
    allMarketItems.value = marketItems.allMarkets;
    console.log(allMarketItems.value);
}

onMounted(() => {
    loadMarketItems();
});
</script>

<style scoped>
</style>
