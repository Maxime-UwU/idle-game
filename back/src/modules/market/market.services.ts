import { MarketBody } from '@/types/market.types';
import { Market } from "@/db/models/Market";
import { BuyBody } from '@/types/market.types'
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

export async function buyItem(body: BuyBody) {

    const buyerRessource = await Ressources.find({ userID: body.userId, name: body.market.ressource.name }).toArray();
    if (!buyerRessource || buyerRessource.length === 0) {
        return { success: false, message: 'No buyer ressource' };
    }

    const buyerGoldAmount = await Ressources.find({ userID: body.userId, name: 'gold' }).toArray();
    if (!buyerRessource || buyerRessource.length === 0) {
        return { success: false, message: 'No buyer gold' };
    }

    const sellerGoldAmount = await Ressources.find({ userID: body.market.userId, name: 'gold' }).toArray();
    if (!buyerRessource || buyerRessource.length === 0) {
        return { success: false, message: 'No seller ressource' };
    }
    
    const buyerRessourceItem = buyerRessource[0];
    const buyerGoldAmountItem = buyerGoldAmount[0]
    const sellerGoldAmountItem = sellerGoldAmount[0]
    const finalMarketRessourceQuantity = body.market.quantity - body.buyQuantity;
    const finalBuyerRessourceQuantity = buyerRessourceItem.quantity + body.buyQuantity;
    const finalBuyerGoldQuantity = buyerGoldAmountItem.quantity - body.buyPrice
    const finalSellerGoldQuantity = sellerGoldAmountItem.quantity + body.buyPrice

    await Ressources.updateOne(
        { userId: body.userId, name: buyerGoldAmountItem.name },
        { $set: { quantity: finalBuyerGoldQuantity } }
    )

    await Ressources.updateOne(
        { userId: body.userId, name: sellerGoldAmountItem.name },
        { $set: { quantity: finalSellerGoldQuantity } }
    )

    await Ressources.updateOne(
        { userId: body.userId, name: body.market.ressource.name },
        { $set: { quantity: finalBuyerRessourceQuantity } }
    )

    await Market.updateOne(
        { userId: body.market.userId, name: body.market.ressource.name },
        { $set: { quantity: finalMarketRessourceQuantity } }
    );

    return { success: true, message: body }
}


export async function getAllMarket( userId: string ) {
    const market = await Market.find({ userId: { $ne: userId } }).toArray();
    if (!market) {
        return { success: false, message: 'No items' };
    }
    
    return { success: true, message: 'success', allMarkets: market };
}




