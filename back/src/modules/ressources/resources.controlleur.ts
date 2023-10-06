//import { Ressource } from "@/types/ressource.types";
import { Express, Request, Response } from "express";
import { getGoldAmount, getPlayerItems, buyItem } from "./resources.services";
//import { requireLogin } from "./ressources.middleware";

export function ressourceRoutes(app: Express) {

app.get('/ressource', async(req: Request, res: Response) => {
    const ressourceName = req.query.name?.toString();// Convertissez userId en chaîne de caractères
    if (!ressourceName) {
        res.json({ success: false, message: 'Missing userId parameter' });
        return;
    }

    const result = await getGoldAmount(ressourceName);
    res.json(result);
})

app.get('/market/playerItems', async (req: Request, res: Response) => {
    const userId = req.query.userId?.toString();// Convertissez userId en chaîne de caractères
    if (!userId) {
        res.json({ success: false, message: 'Missing userId parameter' });
        return;
    }
    const result = await getPlayerItems(userId)
    res.json(result)
})

app.post('/market/buyItems', async (req, res)=>{
    const result = await buyItem(req.body)
    res.json(result)
})

}
