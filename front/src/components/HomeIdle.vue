<script setup lang="ts">

import axios from 'axios'
import { ref } from 'vue';
import * as ressource from '../api/ressource';
import {type Ressource}  from '../api/ressource';
import { register} from '../api/ressource'

let gold= ref<Ressource[]>([]);


async function getRessource(userID: string){
   const playerItems= await ressource.getPlayerItems(userID)
   if(playerItems)
    gold.value = playerItems.playerRessource
  }
getRessource('651d75c95c2ac5bb2ef05afb')

function genererateGoldMine(): string {
	return '<img src="src/assets/test3.png" >';
}

function genererateStoneQuarry(): string {
	return '<img src="src/assets/test2.png" >';
}

function genererateScierie(): string {
	return '<img src="src/assets/test1.png" >';
}

async function handleFactoryButtonClick(factoryName: string) {
	// Utilisation d'Axios pour récupérer les données des factories
	const foundFactory = await axios.get(`http://localhost:3001/factory?userID=${factoryName}`)

	if (foundFactory) {
		console.log('ID de la factory', foundFactory.data.resources);
		// Vous pouvez maintenant utiliser foundFactory._id comme l'ID de la factory
	} else {
		console.error('Factory non trouvée avec le nom', factoryName);
	}

	foundFactory.data.resources.forEach((resource: any, index: number) => {
		console.log(`Nom de la ligne ${index}: ${resource.name}`);
		const container = document.getElementById('container');

		if (resource.name == "gold mine") {
			genererateGoldMine();

			if (container) {
				container.innerHTML += genererateGoldMine();
			}
		}

		if (resource.name == "stone quarry") {
			genererateStoneQuarry();

			if (container) {
				container.innerHTML += genererateStoneQuarry();
			}
		}

		if (resource.name == "scierie") {
			genererateScierie();

			if (container) {
				container.innerHTML += genererateScierie();
			}
		}




	});
}



</script>

<template>
  <div>

    <h1>Medieval Factory</h1>
    <button @click="register()"> test 1</button>
    <div>
      <p v-for="(ressource, i) in gold" :key="i">{{ressource.name + ": " + ressource.quantity}}</p>
    </div>
    <button @click="handleFactoryButtonClick('651d638002a411e2a5e30897')">Factory 1</button>
  </div>
</template>

<style scoped>
h1 {
	font-weight: 500;
	font-size: 2.6rem;
	position: relative;
	top: -10px;
}
</style>
