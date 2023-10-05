import { Express } from "express";
import { sellItem } from "./market.services";
// import { Ressources } from "@/db/models/Ressources";

export function marketRoutes(app: Express) {

    app.post('/market/sellItem', async (req, res) => {
        const result = await sellItem(req.body)
        // on set un cookie si on a un token dans le result
        console.log(result);
        res.json(result)
    })
}