import { Ressource } from "@/types/ressource.types";
import { db } from "../mongo";

export const Ressources = db!.collection<Ressource>('Ressources')


