<script setup lang="ts">
import axios from 'axios';
import {getPlayerGold} from '../api/ressource'
import { getRessource } from '../api/ressource'

async function createGoldMine() {
    // Utilisation d'Axios pour récupérer les données des factories

    const factoryData = {
        name: "gold",
        lvl: 1,
        production: 100,
        price: 100,
        userID: '651d75c95c2ac5bb2ef05afb',
    }

    canBuy(factoryData)
  
}

async function canBuy(factoryData: any){
    const gold = await getPlayerGold('651d75c95c2ac5bb2ef05afb')
    if(gold?.quantity){
        if(gold.quantity>factoryData.price){
            const newQuantity = gold.quantity-factoryData.price;
            await axios.post(`http://localhost:3001/factory`, factoryData)
            await axios.post('http://localhost:3001/market/buyItems', {ressource: gold, newQuantity: newQuantity})
            getRessource('651d75c95c2ac5bb2ef05afb')
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
        name: "stone",
        lvl: 1,
        production: 100,
        price: 250,
        userID: "123456",
    }


    canBuy(factoryData)
}

async function createScierie() {
    // Utilisation d'Axios pour récupérer les données des factories

    const factoryData = {
        name: "wood",
        lvl: 1,
        production: 100,
        price: 250,
        userID: "123456",
    }
    
  
    canBuy(factoryData)
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