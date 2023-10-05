<template>
    <div class="flex flex-col items-center">
        <button @click="toggleForm()" class="p-4 mt-4 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full font-semibold text-xl  text-white">{{ buttonText }}</button>
        <div v-if="displayForm" class="flex flex-col items-center mt-4">
            <form @submit.prevent="onSubmitForm()" class="flex flex-col items-center space-y-4">
                <label class="text-white text-lg" for="ressourceType">Type de ressource</label>
                <select name="ressourceType" v-model="sellItem.ressource" class="text-black w-96 h-12 rounded-xl px-4">
                    <option>--Veuillez choisir une ressource à vendre--</option>
                    <option :value="item" v-for="(item, i) in allPlayerItems" :key="i">{{ item.name + '' + '(' + item.quantity + ')'}}</option>
                </select>
                <div class="flex items-center space-x-4">
                    <label class="text-white text-lg">Quantité</label>
                    <input name="quantity" v-model="sellItem.quantity" placeholder="Quantité" type="text" class="text-black w-32 h-12 rounded-xl px-4">
                    <label class="text-white text-lg">Prix</label>
                    <input v-model="sellItem.price" placeholder="Prix" type="text" class="text-black w-32 h-12 rounded-xl px-4">
                </div>
                <button :disabled="!isValidSale" name="price" type="submit" class="p-4 rounded-full disabled:bg-blue-800 bg-gradient-to-r enabled:from-sky-500 enabled:to-indigo-600 text-white font-semibold text-xl">Commencez la vente</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

import * as Market from '../api/market';
import { type MarketBody } from '../api/market';
import { type Ressource }  from '../api/market';


let displayForm = ref(false);
let buttonText = 'Créer une vente'

const toggleForm = () => {
    displayForm.value = !displayForm.value; 
    buttonText = displayForm.value ? 'Annuler la vente' : 'Créer une vente';
};


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
    userId: userId,
    ressource: { name: '', quantity: 0, userID: '', lvl: 0 } as Ressource,
    quantity: 0,
    price: 0,
});

const isValidSale = computed(() => {
    if (!sellItem.value.quantity || !sellItem.value.ressource || !sellItem.value.price) {
        return false;
    }

        const selectedItem = allPlayerItems.find(item => item.name === sellItem.value.ressource.name);
        return sellItem.value.quantity > 0 && sellItem.value.quantity <= selectedItem.quantity;
});


function onSubmitForm() {
    console.log(sellItem.value)
    try {
        Market.sellItem(sellItem.value);
        // Réinitialiser les valeurs de sellItem après la soumission réussie
        sellItem.value = {
            userId: '',
            ressource: { name: '', quantity: 0, userID: '', lvl: 0 } as Ressource,
            quantity: 0,
            price: 0,
        };

        toggleForm()
    } catch (error) {
        console.error(error);
    }
}


</script>

<style scoped>

</style>