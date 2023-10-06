//import { Ressource } from "@/types/ressource.types";
import { Ressources } from "@/db/models/Ressources";
import Ressource from "@/types/ressource.types";
//import crypto from 'crypto';
//import { WithId } from "mongodb";


export async function getGoldAmount(ressourceName: string){
    const Resources = await Ressources.find({ name: ressourceName }).toArray();
    if (!Resources || Resources.length === 0) {
        return { success: false, message: 'No items' };
    }
    
    return {resources: Resources };
    //return Ressources.find({name: "gold"})
}


export async function getPlayerItems( userId: string ) {
    const playerRessource = await Ressources.find({ userID: userId }).toArray();
    if (!playerRessource) {
        return { success: false, message: 'No items' };
    }
    
    return { success: true, message: 'success', playerRessource };
}


export async function buyItem(body: {ressource: Ressource,newQuantity: number}){
    console.log("buy item")
    console.log(body)
    await Ressources.updateOne(
      { userID: body.ressource.userID, name: body.ressource.name },
      { $set: { quantity: body.newQuantity } }
  );
  }


