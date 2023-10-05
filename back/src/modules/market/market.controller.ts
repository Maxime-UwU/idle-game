import { Express } from "express";
import { sellItem, getAllMarket } from "./market.services";
// import { Ressources } from "@/db/models/Ressources";

export function marketRoutes(app: Express) {

    app.post('/market/sellItem', async (req, res) => {
        const result = await sellItem(req.body)
        // on set un cookie si on a un token dans le result
        console.log(result);
        res.json(result)
    })

    app.get('/market/allMarket', async (req, res) => {
        const userId = req.body.userId?.toString();// Convertissez userId en chaîne de caractères
        if (!userId) {
            res.json({ success: false, message: 'Missing userId parameter' });
            return;
        }
        const result = await getAllMarket(userId)
        console.log(result)
        res.json(result)
    })
}