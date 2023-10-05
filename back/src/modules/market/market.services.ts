import { MarketBody } from '@/types/market.types';
import { Market } from "@/db/models/Market";

export async function sellItem(body: MarketBody) {

    console.log("testtest")
 
    await Market.insertOne({
        userId: body.userId,
        quantity: body.quantity,
        price: body.price,
        ressource: body.ressource
    })
    
    return { success: true }
}