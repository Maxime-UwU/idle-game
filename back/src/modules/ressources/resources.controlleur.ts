//import { Ressource } from "@/types/ressource.types";
import { Express, Request, Response } from "express";
import { getGoldAmount } from "./resources.services";
//import { requireLogin } from "./ressources.middleware";

export function ressourceRoutes(app: Express) {

app.get('/ressource', async(req: Request, res: Response) => {
    const ressourceName = req.query.name?.toString();// Convertissez userId en chaîne de caractères
    if (!ressourceName) {
        res.json({ success: false, message: 'Missing userId parameter' });
        return;
    }

    const result = await getGoldAmount(ressourceName);
    console.log(result);
    res.json(result);

})



}