// import { MarketSell } from "@/types/market.types";
import { Express } from "express";
import { Request, Response } from "express";
import { getPlayerFactories } from "./factory.services";
import { addPlayerFactory } from "./factory.services";

export function marketRoutes(app: Express) {
  app.get("/factory", async (req: Request, res: Response) => {
    const userId = req.query.userID?.toString(); // Convertissez userId en chaîne de caractères
    if (!userId) {
      res.json({ success: false, message: "Missing userId parameter" });
      return;
    }
    const result = await getPlayerFactories(userId);
    console.log("ressourceName: ");
    console.log(result);
    res.json(result);
  });


  app.get("/factory", async (req: Request, res: Response) => {
    const factoryId = req.query._id?.toString(); // Convertissez userId en chaîne de caractères
    if (!factoryId) {
      res.json({ success: false, message: "Missing factoryId parameter" });
      return;
    }

    const result = await getPlayerFactories(factoryId);
    console.log("factoryData: ");
    console.log(result);
    res.json(result);
  });


  app.post("/factory", async (req: Request, res: Response) => {
    const factoryData = req.body; // Les données de la factory envoyées depuis le client
    console.log("Données de la factory envoyés :", factoryData);
    // Traitez les données comme nécessaire
    const send = await addPlayerFactory(factoryData);
    console.log("send data: ");
    console.log(send);

    res.json({
      success: true,
      message: "Données de la factory reçues avec succès",
    });
  });
}
