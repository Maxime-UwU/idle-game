<script setup lang="ts">
import axios from 'axios';

async function getFactoryLevel(factoryID: string) {
	// Utilisation d'Axios pour récupérer les données des factories
	const foundFactory = await axios.get(`http://localhost:3001/factory?_id=${factoryID}`)

	if (foundFactory) {
		console.log('ID de la factory', foundFactory.data.resources);
		// Vous pouvez maintenant utiliser foundFactory._id comme l'ID de la factory
	} else {
		console.error('Factory non trouvée avec le nom', factoryID);
	}

    const upgrade = document.getElementById("upgradeContainer");
    if(upgrade){
        upgrade.innerHTML = `<p> From level ${foundFactory.data.resources.name}</p>
                             <p> to level {{  }}</p>`
    }


}
</script>

<template>
    <button @click="getFactoryLevel('651d638002a411e2a5e30897')" >upgrade</button>
    <div id="upgradeContainer" >

    </div>
    

</template>
