import { ClanWarLeague } from '../types'

export class WarLeague {
    id: number
    name: string

    constructor(data: ClanWarLeague) {
        this.id = data.id
        this.name = data.name
    }
}