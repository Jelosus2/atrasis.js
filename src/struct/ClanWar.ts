import * as moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)
import { APIClanWarInfo, APIClanWar } from '../types'

export class ClanWar {
    clan: APIClanWarInfo
    opponent: APIClanWarInfo
    teamSize: number
    attacksPerMember: number
    startTime: string
    endTime: string
    state: string

    constructor(data: APIClanWar) {
        this.clan = data.clan
        this.opponent = data.opponent
        this.teamSize = data.teamSize
        this.attacksPerMember = data.attacksPerMember
        this.startTime = data.startTime
        this.endTime = data.endTime
        this.state = data.state
    }

    status() {
        if (this.state == 'IN_WAR') return 'In War'
        if (this.state == 'PREPARATION') return 'Preparation Day'
        if (this.state == 'ENDED') return 'War Ended'
    }

    endsAt() {
        if (this.state != 'IN_WAR') return 'The war already ended or its in preparation'
        const endTime = moment.default(this.endTime).toDate().getTime()
        return moment.default(endTime).format('MMMM Do YYYY, h:mm:ss a')
    }

    startsAt() {
        if (this.state != 'PREPARATION') return 'The war already ended or its in progress'
        const startTime = moment.default(this.startTime).toDate().getTime()
        return moment.default(startTime).format('MMMM Do YYYY, h:mm:ss a')
    }
}