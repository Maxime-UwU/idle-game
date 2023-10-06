import axios from 'axios'
import type { Ressource } from './ressource';

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


		if (resource.name == "gold") {

			const nouvelleImage = document.createElement('img');
			const nouvelleDiv = document.createElement('div');
			nouvelleImage.src = 'src/assets/test3.png';
			nouvelleImage.id = `${resource.name}-${index}`;
			nouvelleDiv.id = `img-${index}`;
				if(container){
					container.appendChild(nouvelleImage)
					container.appendChild(nouvelleDiv)
				}
			
				nouvelleImage.onclick = function() {
					displayUpgrade(index, resource)
				}
		}

		if (resource.name == "stone") {

			const nouvelleImage = document.createElement('img');
			const nouvelleDiv = document.createElement('div');
			nouvelleImage.src = 'src/assets/test2.png';
			nouvelleImage.id = `${resource.name}-${index}`;
			nouvelleDiv.id = `img-${index}`;
				if(container){
					container.appendChild(nouvelleImage)
					container.appendChild(nouvelleDiv)
				}
			
				nouvelleImage.onclick = function() {
					displayUpgrade(index, resource)
				}
		}

		if (resource.name == "wood") {

			const nouvelleImage = document.createElement('img');
			const nouvelleDiv = document.createElement('div');
			nouvelleImage.src = 'src/assets/test1.png';
			nouvelleImage.id = `${resource.name}-${index}`;
			nouvelleDiv.id = `img-${index}`;
				if(container){
					container.appendChild(nouvelleImage)
					container.appendChild(nouvelleDiv)
				}
			
				nouvelleImage.onclick = function() {
					displayUpgrade(index, resource)
				}
		}




	});
}

async function test(id: string, index: number){
	console.log(id);
	const displayUpgrade = document.getElementById(`img-${index}`);
	
	if (displayUpgrade) {
        displayUpgrade.innerHTML = '';
    }

	const upgradeFactory = await axios.post(`http://localhost:3001/factory?_id=${id}`)

	if (upgradeFactory) {
		console.log('AGAGAGAGAGAGAGAGAGAGAGA', upgradeFactory);
		// Vous pouvez maintenant utiliser foundFactory._id comme l'ID de la factory
	} else {
		console.error('BABABABABABABABABABABABA', upgradeFactory);
	}

}

function displayUpgrade(index: number, resource: Ressource){
	const CalcNextLvl = resource.lvl + 1;
	const CalcNextProd = resource.production * CalcNextLvl;
	const CalcNextPrice = resource.price * CalcNextLvl

	const CurrentLevel = document.createElement('p');
	const CurrentProd = document.createElement('p');
	const NextLevel = document.createElement('p');
	const NextProd = document.createElement('p');
	const Cost = document.createElement('p');
	const UpgradeBtn = document.createElement('button')
	CurrentLevel.textContent = `Current level : ${resource.lvl}`;
	CurrentProd.textContent = `Current production : ${resource.production}`;
	NextLevel.textContent = `Next level : ${CalcNextLvl}`;
	NextProd.textContent = `Next production : ${CalcNextProd}`;
	Cost.textContent = `Cost : ${CalcNextPrice}`;
	UpgradeBtn.textContent = `Upgrade !`;

	const displayUpgrade = document.getElementById(`img-${index}`);
	if(displayUpgrade){
		displayUpgrade.appendChild(CurrentLevel);
		displayUpgrade.appendChild(CurrentProd);
		displayUpgrade.appendChild(NextLevel);
		displayUpgrade.appendChild(NextProd);
		displayUpgrade.appendChild(Cost);
		displayUpgrade.appendChild(UpgradeBtn);
	}

	UpgradeBtn.onclick = function() {
		test(resource._id, index)
	}
}
