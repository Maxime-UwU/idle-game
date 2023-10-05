//import { Ressource } from "@/types/ressource.types";
import { Ressources } from "@/db/models/Ressources";
//import crypto from 'crypto';
//import { WithId } from "mongodb";


export async function getGoldAmount(ressourceName: string){
    console.log("ressourceName: ")
    console.log(ressourceName)
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



