import { Ressources } from "@/db/models/Ressource";

export async function getPlayerItems(body: { userId: '651d638002a411e2a5e30897' }) {
    const playerRessource = await Ressources.find({ userID: body.userId });
    if (!playerRessource) {
        return { success: false, message: 'No items' };
    }
    
    return { success: true, message: 'success' };
}
