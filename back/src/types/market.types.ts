import Ressource from './ressource.types'

export interface MarketBody {
    userId: string,
    ressource: Ressource,
    quantity: number,
    price: number
}

export default MarketBody