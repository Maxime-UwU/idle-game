import { MarketBody } from '@/types/market.types';
import { Market } from "@/db/models/Market";
import { Ressources } from '@/db/models/Ressources';

export async function sellItem(body: MarketBody) {

    const finalRessourceQuantity = body.ressource.quantity - body.quantity;
    const updatedMarketRessource = { ...body.ressource, quantity: finalRessourceQuantity };
    await Ressources.updateOne(
        { userID: body.ressource.userID, name: body.ressource.name },
        { $set: { quantity: finalRessourceQuantity } }
    );


    await Market.insertOne({
        userId: body.userId,
        quantity: body.quantity,
        price: body.price,
        ressource: updatedMarketRessource,
    })
    
    return { success: true, message: body }
}

export async function getAllMarket( userId: string ) {
    const market = await Market.find({ userId: { $ne: userId } }).toArray();
    if (!market) {
        return { success: false, message: 'No items' };
    }
    
    return { success: true, message: 'success', market };
}




