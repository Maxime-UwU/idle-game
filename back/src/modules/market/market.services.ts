import { Ressources } from "@/db/models/Ressource";

export async function getPlayerItems(userId: string) {
    const playerResources = await Ressources.find({ userID: userId }).toArray();
    if (!playerResources || playerResources.length === 0) {
        return { success: false, message: 'No items' };
    }
    
    return { success: true, message: 'Success', resources: playerResources };
}
