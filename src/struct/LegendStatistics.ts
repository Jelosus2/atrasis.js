import { PlayerLegendSeason, PlayerLegendStatistics } from '../types'
import { LegendSeason } from './LegendSeason'

export class LegendStatistics {
    legendTrophies: number
    bestSeason: PlayerLegendSeason | null
    previousSeason: PlayerLegendSeason | null
    currentSeason: PlayerLegendSeason | null
    bestVersusSeason: PlayerLegendSeason | null
    previousVersusSeason: PlayerLegendSeason | null

    constructor(data: PlayerLegendStatistics) {
        this.legendTrophies = data.legendTrophies
        this.bestSeason = data.bestSeason ? new LegendSeason(data.bestSeason) : null
        this.currentSeason = data.currentSeason ? new LegendSeason(data.currentSeason) : null
        this.previousSeason = data.previousSeason ? new LegendSeason(data.previousSeason) : null
        this.bestVersusSeason = data.bestVersusSeason ? new LegendSeason(data.bestVersusSeason) : null
        this.previousVersusSeason = data.previousVersusSeason ? new LegendSeason(data.previousVersusSeason) : null
    }

}