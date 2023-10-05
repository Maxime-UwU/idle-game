<template>
    <div class="flex flex-col items-center">
        <button @click="openForm()" class="p-4 mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full font-semibold text-xl  text-white">Créer une vente</button>
        <div v-if="displayForm" class="flex flex-col items-center mt-4">
            <form @submit.prevent="onSubmitForm()" class="flex flex-col items-center space-y-4">
                <label class="text-white text-xl" for="ressourceType">Type de ressource</label>
                <select name="ressourceType" v-model="sellItem.ressource" class="text-black w-96 h-12 rounded-xl px-4">
                    <option>--Veuillez choisir une ressource à vendre--</option>
                    <option :value="item" v-for="(item, i) in allPlayerItems" :key="i">{{ item.name + '' + '(' + item.quantity + ')'}}</option>
                </select>
                <div class="flex space-x-4">
                    <input  name="quantity" v-model="sellItem.quantity" placeholder="Quantité" type="number" class="text-black w-32 h-12 rounded-xl px-4">
                    <input v-model="sellItem.price" placeholder="Prix" type="number" class="text-black w-32 h-12 rounded-xl px-4">
                </div>
                <button :disabled="!isValidSale" name="price" type="submit" class="p-4 rounded-full bg-blue-800 text-white font-semibold text-xl">Commencez la vente</button>
            </form>
            <button @click="closeForm()" class="p-4 bg-white">close</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

import * as Market from '../api/market';
import {type MarketBody}  from '../api/market';

const displayForm = ref(false);

const openForm = () => {
    displayForm.value = true
};

function closeForm() {
    displayForm.value = false
}

const userId = '651d638002a411e2a5e30897';

let allPlayerItems: any[]

const loadPlayerItems = async () => {
    const playerItems = await Market.getPlayerItems(userId);
    allPlayerItems = playerItems.playerRessource
    console.log(playerItems.playerRessource);
};

onMounted(() => {
    loadPlayerItems();
});

const sellItem = ref<MarketBody>({

});

const isValidSale = computed(() => {
    if (!sellItem.quantity || !sellItem.ressource || !allPlayerItems) {
        return false;
    }
    
    const selectedItem = allPlayerItems.find(item => item.name === sellItem.ressource);
    return sellItem.quantity <= selectedItem.quantity;
});


function onSubmitForm() {
    console.log(sellItem)
    
    Market.sellItem(sellItem)
}


</script>

<style scoped>

</style>