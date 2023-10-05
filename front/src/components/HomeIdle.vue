<script setup lang="ts">
import axios from "axios"
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
