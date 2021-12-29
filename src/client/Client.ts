import { EventEmitter } from 'events'
import { RESTManager } from '../rest/RESTManager'
import { SelectionError } from '../rest/SelectionError'

import {
    Player,
    Clan,
    ClanWar
} 
from '../struct'

import {
    HTTPError,
    clanErrors,
    clanWarErrors,
    warLogPrivate,
    playerErrors
}
from '../rest/HTTPError'

type Server = 'Original' | 'Ultimate'

export class Client extends EventEmitter {
    rest: RESTManager
    server: string

    constructor(server: Server) {
        super()

        if (server !== 'Original' && server !== 'Ultimate') throw new SelectionError(400)

        this.rest = new RESTManager(server)
        this.server = server
    }

    async getPlayer(tag: string) {
        const data = await this.rest.player(tag)
        if (!data.tag) throw new HTTPError(playerErrors, data.code)

        return new Player(this, data)
    }

    async getClan(tag: string) {
        const data = await this.rest.clan(tag)
        if (!data.tag) throw new HTTPError(clanErrors, data.code)

        return new Clan(this, data)
    }

    async getClanWar(tag: string) {
        const clanData = await this.rest.clan(tag)
        if (!clanData.tag) throw new HTTPError(clanErrors, clanData.code)
        if (clanData.isWarLogPublic == false) throw new HTTPError(warLogPrivate, -1000)

        const data = await this.rest.clanWar(tag)
        if (!data.clan) throw new HTTPError(clanWarErrors, data.code)

        return new ClanWar(data)
    }

}