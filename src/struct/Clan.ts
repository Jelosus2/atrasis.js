import { APIClan } from '../types'
import { Label } from './Label'
import { Client } from '../client/Client'
import { Location } from './Location'
import { WarLeague } from './WarLeague'

export class Clan {
    tag: string
    name: string
    description: string
    type: string
    location: Location | null
    clanLevel: number
    clanPoints: number
    clanVersusPoints: number
    requiredTrophies: number
    requiredVersusTrophies: number
    requiredTownhallLevel: number
    warFrequency: string
    warWinStreak: number
    warWins: string
    isWarLogPublic: boolean
    warLeague: WarLeague | null
    members: number
    labels: Label[]

    constructor(public client: Client, data: APIClan) {
        this.tag = data.tag
        this.name = data.name
        this.description = data.description
        this.type = data.type
        this.location = data.location ? new Location(data.location) : null
        this.clanLevel = data.clanLevel
        this.clanPoints = data.clanPoints
        this.clanVersusPoints = data.clanVersusPoints
        this.requiredTrophies = data.requiredTrophies
        this.requiredVersusTrophies = data.requiredVersusTrophies
        this.requiredTownhallLevel = data.requiredTownhallLevel
        this.warFrequency = data.warFrequency
        this.warWinStreak = data.warWinStreak
        this.warWins = data.warWins
        this.isWarLogPublic = data.isWarLogPublic
        this.warLeague = data.warLeague ? new WarLeague(data.warLeague) : null
        this.members = data.members
        this.labels = data.labels.map((data) => new Label(data))
    }

    async fetchWar() {
        return await this.client.getClanWar(this.tag)
    }
}