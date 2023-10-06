import { Factories, CreateFactories } from "@/db/models/Factory";

export async function getPlayerFactories(userId: string) {
  console.log("ressourceName: ");
  console.log(userId);
  const playerFactories = await Factories.find({ userID: userId }).toArray();
  if (!playerFactories || playerFactories.length === 0) {
    return { success: false, message: "No items" };
  }

  return { success: true, message: "Success", resources: playerFactories };
}

export async function getFactoriesUpgrades(factoryId: string) {
  console.log("factory info: ");
  console.log(factoryId);
  const factoriesData = await Factories.find({ userID: factoryId }).toArray();
  if (!factoriesData || factoriesData.length === 0) {
    return { success: false, message: "No items" };
  }

  return { success: true, message: "Success", resources: factoriesData };
}

export async function addPlayerFactory(factoryData: any) {
  console.log("test");
  try {
    // Insérez la factory dans la base de données
    await CreateFactories.insertOne({ ...factoryData });
    return { success: true, message: "Factory ajoutée avec succès" };
  } catch (error) {
    console.error("Erreur lors de l'ajout de la factory :", error);
    return { success: false, message: "Erreur lors de l'ajout de la factory" };
  }
}
