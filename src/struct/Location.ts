import { ClanLocation } from '../types'

export class Location {
    id: number
    name: string
    isCountry: boolean
    countryCode: string | null

    constructor(data: ClanLocation) {
        this.id = data.id
        this.name = data.name
        this.isCountry = data.isCountry
        this.countryCode = data.countryCode ?? null
    }
}