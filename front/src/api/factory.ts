import axios from 'axios'
import { ref } from 'vue';
import { getPlayerItems, getRessource, type Ressource } from './ressource';

export interface Factory {
    name: string;
    lvl: number;
    _id: string;
    production: number;
    price: number;
    userID: string;
  }

export  const myFactories= ref<Factory[]>([]);

export async function handleFactoryButtonClick(factoryName: string) {
	// Utilisation d'Axios pour récupérer les données des factories
	const foundFactory = await axios.get(`http://localhost:3001/factory?userID=${factoryName}`)
	if (foundFactory) {
        myFactories.value = foundFactory.data.resources
        setInterval(async () =>{
             try {
            // Logique asynchrone ici
            const result = await productionRessource(factoryName);
          } catch (error) {
            console.error('Erreur dans setInterval :', error);
          }
         },1000)
		// Vous pouvez maintenant utiliser foundFactory._id comme l'ID de la factory
	} else {
		console.error('Factory non trouvée avec le nom', factoryName);
	}

	foundFactory.data.resources.forEach((resource: any, index: number) => {
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


export async function productionRessource(factoryName: string){
    const myRessources = await getPlayerItems(factoryName)
    let goldFactory: number = 0
    let woodFactory: number = 0
    let stoneFactory: number = 0
        myFactories.value.forEach(element => {
            if(element.name == "gold"){
                goldFactory+= element.production
            }
            if(element.name == "wood"){
                woodFactory+= element.production
            } 
            if(element.name == "stone"){
                stoneFactory+= element.production
            }
        });
        if(myRessources){
        myRessources.playerRessource.forEach(async e => {
            if(e.name=="gold"){
                const newQuantity = e.quantity+goldFactory
                await axios.post('http://localhost:3001/factory/farm', {ressource: e, newQuantity: newQuantity})
            } 
            if(e.name=="stone"){
                const newQuantity = e.quantity+stoneFactory
                await axios.post('http://localhost:3001/factory/farm', {ressource: e, newQuantity: newQuantity})
            }
            if(e.name=="wood"){
                const newQuantity = e.quantity+woodFactory
                await axios.post('http://localhost:3001/factory/farm', {ressource: e, newQuantity: newQuantity})
            }
               getRessource(factoryName)
        });
    }
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
