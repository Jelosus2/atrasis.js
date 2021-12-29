import { PlayerLegendSeason } from '../types'

export class LegendSeason {
    year: number
    month: number
    rank: number

    constructor(data: PlayerLegendSeason) {
        this.year = data.year
        this.month = data.month
        this.rank = data.rank
    }
}