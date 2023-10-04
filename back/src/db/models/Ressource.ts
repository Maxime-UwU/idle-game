import { Ressource } from "@/types/market.types";
import { db } from "../mongo";

export const Ressources = db!.collection<Ressource>('Ressources')
