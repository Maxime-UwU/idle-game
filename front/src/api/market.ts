import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Remplacez par l'URL de votre API


export const getPlayerItems = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/market/playerItems?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const sellItem = async (body: MarketBody) => {
    try {
        const response = await axios.post(`${API_URL}/market/sellItem`, body);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const buyItem = async (body: BuyBody) => {
    try {
        const response = await axios.post(`${API_URL}/market/buyItem`, body);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getAllMarket = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/market/allMarket`, {
            params: {
                userId: userId,
            },
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export interface Ressource {
    name: string
    quantity: number,
    lvl: number,
    userID: string,
}

export interface MarketBody {
    userId: string,
    ressource: Ressource,
    quantity: number,
    price: number
}

export interface BuyBody {
    userId: string,
    market: MarketBody,
    buyQuantity: number, 
    buyPrice: number,
}



    