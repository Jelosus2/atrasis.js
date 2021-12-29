import { APIPlayerClan } from '../types'
import { Client } from '../client/Client'

export class PlayerClan {
    tag: string
    name: string
    level: number | null
    badge: number
    role: string | null

    constructor(public client: Client, data: APIPlayerClan) {
        this.tag = data.tag
        this.name = data.name
        this.level = data.level ?? null
        this.badge = data.badge
        this.role = data.role ?? null
    }

    async fetch() {
        return await this.client.getClan(this.tag)
    }

    async fetchWar() {
        return await this.client.getClanWar(this.tag)
    }

}