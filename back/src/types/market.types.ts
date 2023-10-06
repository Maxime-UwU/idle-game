import Ressource from './ressource.types'

export interface MarketBody {
    userId: string,
    ressource: Ressource,
    quantity: number,
    price: number
}

export interface BuyBody {
    userId: string,
    market: MarketBody,
    buyQuantity: number, 
    buyPrice: number,
}

export default MarketBody