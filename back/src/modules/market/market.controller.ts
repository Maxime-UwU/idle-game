// import { MarketSell } from "@/types/market.types";
import { Express } from "express";
import { Request, Response } from "express";
import { getPlayerItems } from "./market.services";

export function marketRoutes(app: Express) {

    app.get('/market/playerItems', async (req: Request, res: Response) => {
        const userId = req.query.userId?.toString(); // Convertissez userId en chaîne de caractères
        console.log("test")
        console.log(userId)
        if (!userId) {
            res.json({ success: false, message: 'Missing userId parameter' });
            return;
        }
    
        const result = await getPlayerItems(userId);
        console.log(result);
        res.json(result);
    });


}