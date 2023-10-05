import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Remplacez par l'URL de votre API

export const getAllItemToSell = async (userid: string) => {
    try {
        const response = await axios.get(`${API_URL}/market`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// export const buyItem = async (itemId: number) => {
//     try {
//         const response = await axios.post(`${API_URL}/market/buy`, { itemId });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

const sellItem = async (itemId: number) => {
    try {
        const response = await axios.post(`${API_URL}/market/sell`, { itemId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default sellItem;