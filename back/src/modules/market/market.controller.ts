// import { MarketSell } from "@/types/market.types";
import { Express } from "express";
import { Request, Response } from "express";
import { getPlayerItems } from "./market.services";

export function marketRoutes(app: Express) {

    app.get('/market/playerItems', async (req: Request, res: Response) => {
        const result = await getPlayerItems(req.body)
        console.log(result)
        res.json(result)
})


}