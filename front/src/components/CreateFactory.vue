<script setup lang="ts">
import axios from 'axios';
import {getPlayerGold} from '../api/ressource'

async function createGoldMine() {
    // Utilisation d'Axios pour récupérer les données des factories

    const factoryData = {
        name: "gold mine",
        lvl: 1,
        production: 100,
        price: 100,
        userID: '651d75c95c2ac5bb2ef05afb',
    }
    const gold = await getPlayerGold('651d75c95c2ac5bb2ef05afb')
    if(gold?.quantity){
        if(gold.quantity>factoryData.price){
            const newQuantity = gold.quantity-factoryData.price;
            await axios.post(`http://localhost:3001/factory`, factoryData)
            await axios.post('http://localhost:3001/market/buyItems', {gold, newQuantity})
        }
    }
  
}

async function createQuarry(name: string) {

if(name == "gold"){
    createGoldMine()
}else if(name == "wood"){
    createScierie()
}else if(name == "stone"){
    createStoneQuarry()
}
}

async function createStoneQuarry() {
    // Utilisation d'Axios pour récupérer les données des factories

    const factoryData = {
        name: "stone quarry",
        lvl: 1,
        production: 100,
        price: 100,
        userID: "123456",
    }

    await axios.post(`http://localhost:3001/factory`, factoryData)
        .catch(error => {
            console.error("There was an error!", error);
        });
}

async function createScierie() {
    // Utilisation d'Axios pour récupérer les données des factories

    const factoryData = {
        name: "scierie",
        lvl: 1,
        production: 100,
        price: 100,
        userID: "123456",
    }
    
    await axios.post(`http://localhost:3001/factory`, factoryData)
        .catch(error => {
            console.error("There was an error!", error);
        });
}

let Usines = [ {name: "gold", price: "100", lvl:0, img:"../assets/test3.png"}, {name: "wood", price:"250", lvl:1, img:"../assets/test1.png"}, {name: "stone",price:"250", lvl:1, img:"../assets/test2.png"}]

</script>

<template>
    <div class="relative mt-4">
        <div class="w-full px-8 grid gap-6 grid-cols-3">
            <div class="bg-gray-600 p-4 rounded-xl cursor-pointer" v-for="(item, i) in Usines" :key="i">
                <button @click="createQuarry(item.name)">
                    <img  :src=item.img>
                    <p class="text-white">{{ item.name }}</p>
                    <p class="text-white">{{ 'Prix : ' + item.price }}</p>
                </button>
            </div>
        </div>
    </div>

</template>