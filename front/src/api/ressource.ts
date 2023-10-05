import axios from 'axios';

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
        console.error(error);
    }
};

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
