export interface APIPlayer {
    tag: string
    name: string
    expLevel: number
    townHallLevel: number
    trophies: number
    bestTrophies: number
    league: PlayerLeague
    attackWins: number
    defenseWins: number
    builderHallLevel: number
    versusTrophies: number
    bestVersusTrophies: number
    versusBattleWins: number
    warStars: number
    legendStatistics: PlayerLegendStatistics
    labels: Labels[]
    clan: APIPlayerClan
}

export interface PlayerLeague {
    name: string
    id: number
    icon: string
}

export interface PlayerLegendStatistics {
    legendTrophies: number
    bestSeason: PlayerLegendSeason 
    previousSeason: PlayerLegendSeason 
    currentSeason: PlayerLegendSeason 
    bestVersusSeason: PlayerLegendSeason
    previousVersusSeason: PlayerLegendSeason
}

export interface PlayerLegendSeason {
    year: number
    month: number
    rank: number
}

export interface Labels {
    id: number
    name: string
}

export interface APIPlayerClan {
    tag: string
    name: string
    level: number
    badge: number
    role: string
}

export interface APIClan {
    tag: string
    name: string
    description: string
    type: string
    location: ClanLocation
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
    warLeague: ClanWarLeague
    members: number
    labels: Labels[]
}

export interface ClanLocation {
    id: number
    name: string
    isCountry: boolean
    countryCode: string
}

export interface ClanWarLeague {
    id: number
    name: string
}

export interface APIClanWar {
    clan: APIClanWarInfo
    opponent: APIClanWarInfo
    teamSize: number
    attacksPerMember: number
    startTime: string
    endTime: string
    state: string
}

export interface APIClanWarInfo {
    tag: string
    name: string
    level: number
    badge: number
    stars: number
    destructionPercentage: number
    attacks: number
    members: ClanWarMembers[]
}

export interface ClanWarMembers {
    tag: string
    name: string
    mapPosition: number
    townhallLevel: number
    opponentAttacks: number
    bestOpponentAttack: bestOpponentAttack
}

export interface bestOpponentAttack {
    stars: number
    destructionPercentage: number
}