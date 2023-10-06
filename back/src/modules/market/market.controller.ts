import { Express } from "express";
import { sellItem, buyItem, getAllMarket } from "./market.services";
// import { Ressources } from "@/db/models/Ressources";

export function marketRoutes(app: Express) {

    app.patch('/market/sellItem', async (req, res) => {
        const result = await sellItem(req.body)
        // on set un cookie si on a un token dans le result
        res.json(result)
    })

    app.get('/market/allMarket', async (req, res) => {
        const userId = req.query.userId?.toString(); // Utilisez req.query pour récupérer l'userId
        if (!userId) {
            res.json({ success: false, message: 'Missing userId parameter' });
            return;
        }
        const result = await getAllMarket(userId)
        res.json(result)
    })

    app.post('/market/buyItem', async (req, res) => {
        const result = await buyItem(req.body)
        // on set un cookie si on a un token dans le result
        console.log(result);
        res.json(result)
    })
}