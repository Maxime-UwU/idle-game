<template>
    <div class="flex flex-col items-center">
        <button @click="openForm()" class="p-4 mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full font-semibold text-xl  text-white">Créer une vente</button>
        <div v-if="displayForm" class="flex flex-col items-center mt-4">
            <p class="text-white">ceci est le formulaire</p>
            <form @submit.prevent="" class="flex flex-col items-center space-y-4">
                <select v-for="(item, i) in Market.getPlayerItems" :key="i" class="text-black w-96 h-12 rounded-xl px-4">
                    <option value="">--Please choose an option--</option>
                    <option >{{ item }}</option>
                </select>
                <input placeholder="Le nombre de ressource que vous souhaiter vendre" type="text" class="text-black w-96 h-12 rounded-xl px-4">
                <button type="submit" class="p-4 rounded-full bg-blue-800 text-white font-semibold text-xl">Commencez la vente</button>
            </form>
            <button @click="closeForm()" class="p-4 bg-white">close</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as Market from '../api/market';

const displayForm = ref(false);

const openForm = () => {
    displayForm.value = true
};

function closeForm() {
    displayForm.value = false
}

const userId = '651d638002a411e2a5e30897';
const selectOptions = Market.getPlayerItems(userId);

function onCreateSell() {
    
}


</script>

<style scoped>

</style>