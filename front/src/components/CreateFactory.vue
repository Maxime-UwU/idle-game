<script setup lang="ts">
import axios from 'axios';


async function createGoldMine() {
    // Utilisation d'Axios pour récupérer les données des factories

    const factoryData = {
        name: "gold mine",
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


</script>

<template>
    <button @click="createGoldMine()">Create new gold mine</button>
    <button @click="createStoneQuarry()">Create new stone quarry</button>
    <button @click="createScierie()">Create new scierie</button>
</template>