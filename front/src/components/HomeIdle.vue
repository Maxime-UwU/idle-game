<script setup lang="ts">

import axios from "axios"
import { onMounted } from "vue";
async function register() {
	const data = {
		username: 'test',
		password: 'test1234'
	}
	await axios.post('http://localhost:3001/auth/register', data)
		.catch(error => {
			console.error("There was an error!", error);
		});
}

onMounted(() => handleFactoryButtonClick('651d638002a411e2a5e30897'));

function displayUpgrade(index: number, name : string){
	console.log("test");
	// const upgrade = document.getElementById(`${name}-${index}`);
	// if(upgrade){
	// 	upgrade.innerHTML = `<LevelUp />`
	// }
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

			const nouvelleImage = document.createElement('img');
			nouvelleImage.src = 'src/assets/test1.png';  // Remplacez par le chemin de votre image

				if(container){
					container.appendChild(nouvelleImage)
				}
			
				nouvelleImage.onclick = function() {
					displayUpgrade(index, resource.name)
				}
		}

		if (resource.name == "stone quarry") {

			const nouvelleImage = document.createElement('img');
			nouvelleImage.src = 'src/assets/test2.png';  // Remplacez par le chemin de votre image

				if(container){
					container.appendChild(nouvelleImage)
				}
			
				nouvelleImage.onclick = function() {
					displayUpgrade(index, resource.name)
				}
		}

		if (resource.name == "scierie") {

			const nouvelleImage = document.createElement('img');
			nouvelleImage.src = 'src/assets/test1.png';  // Remplacez par le chemin de votre image

				if(container){
					container.appendChild(nouvelleImage)
				}
			
				nouvelleImage.onclick = function() {
					displayUpgrade(index, resource.name)
				}
		}




	});
}


</script>

<template>
	<div>
		<button @click="handleFactoryButtonClick('651d638002a411e2a5e30897')">Factory 1</button>
	</div>
	<div id="container">

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
