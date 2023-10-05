import { MarketBody } from "@/types/market.types";
import { db } from "../mongo";

export const Market = db!.collection<MarketBody>('Market')


export default Market