import { CreateFactory, Factory } from "@/types/factory.types";
import { db } from "../mongo";

export const Factories = db!.collection<Factory>("Factories");

export const CreateFactories = db!.collection<CreateFactory>("Factories");

export const FactoriesId = db!.collection<CreateFactory>("Factories");
