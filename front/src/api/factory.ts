import axios from 'axios'

export async function handleFactoryButtonClick(factoryName: string) {
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

function displayUpgrade(index: number, name : string){
	console.log("test");
	// const upgrade = document.getElementById(`${name}-${index}`);
	// if(upgrade){
	// 	upgrade.innerHTML = `<LevelUp />`
	// }
}
