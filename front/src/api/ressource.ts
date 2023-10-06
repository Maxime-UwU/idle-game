import axios from 'axios';
import { ref } from 'vue';


const API_URL = 'http://localhost:3001'; // Remplacez par l'URL de votre API
let  userToken: string
export interface Ressource{
    name: string
    quantity: number,
    lvl: number,
    userID: string,
}

interface SimpleUser {
    username: string
    password: string
}

export const getPlayerItems = async (userId: string) => {
    try {
    const response = await axios.get<{playerRessource:Ressource[]}>(`http://localhost:3001/market/playerItems?userId=${userId}`, {headers: {"Authorization":"Bearer", userToken}})
        return response.data;
    } catch (error) {
        console.log("error get player")
    }
};



export const getPlayerGold = async (userId: string) => {
    const playerItems = await getPlayerItems(userId);
    const goldItem = playerItems?.playerRessource.find(element => element.name === "gold");
    return goldItem || null; // Renvoie la quantité d'or ou 0 si l'élément n'a pas été trouvé.
}

export async function register() {
    const data: SimpleUser = {
      username: 'thomas',
      password: 'motdepasse'
    }
    const test = await axios.post<string>(`http://localhost:3001/auth/login`,data)
    .catch(error => {
        console.error("There was an error!", error);
      });
      console.log(test) // récuperer le token pour l'envoeyr dans api ressource
      //userToken = test
  
  }

export  const gold= ref<Ressource[]>([]);

export async function getRessource(userID: string){
   const playerItems= await getPlayerItems(userID)
   if(playerItems)
    gold.value = playerItems.playerRessource
  }
