import { APIPlayer, PlayerLeague } from '../types'
import { LegendStatistics } from './LegendStatistics'
import { Label } from './Label'
import { PlayerClan } from './PlayerClan'
import { Client } from '../client/Client'

export class Player {
    tag: string
    name: string
    expLevel: number
    townHallLevel: number
    trophies: number
    bestTrophies: number
    league: PlayerLeague
    attackWins: number
    defenseWins: number
    builderHallLevel: number | null
    versusTrophies: number | null
    bestVersusTrophies: number | null
    versusBattleWins: number | null
    warStars: number
    legendStatistics: LegendStatistics | null
    labels: Label[]
    clan: PlayerClan | null

    constructor(public client: Client, data: APIPlayer) {
        this.tag = data.tag
        this.name = data.name
        this.expLevel = data.expLevel
        this.townHallLevel = data.townHallLevel
        this.trophies = data.trophies
        this.bestTrophies = data.bestTrophies
        this.league = data.league
        this.attackWins = data.attackWins
        this.defenseWins = data.defenseWins
        this.builderHallLevel = data.builderHallLevel ?? null
        this.versusTrophies = data.versusTrophies ?? null
        this.bestVersusTrophies = data.bestVersusTrophies ?? null
        this.versusBattleWins = data.versusBattleWins ?? null
        this.warStars = data.warStars
        this.legendStatistics = data.legendStatistics ? new LegendStatistics(data.legendStatistics) : null
        this.labels = data.labels.map((data) => new Label(data))
        this.clan = data.clan ? new PlayerClan(client, data.clan) : null
    }

    async fetchClan() {
        if (this.clan == null) return null
        return await this.client.getClan(this.clan.tag)
    }

    async fetchClanWar() {
        if (this.clan == null) return null
        return await this.client.getClanWar(this.clan.tag)
    }
}