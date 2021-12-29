import { RequestHandler } from './RequestHandler'

export class RESTManager {
    readonly handler: RequestHandler
    
    constructor(server: string) {
        this.handler = new RequestHandler(server)
    }

    player(tag: string) {
        if (!tag.startsWith('#')) throw new TypeError('The tag must start with #')
        const parsedTag = tag.replace('#', '%23')

        return this.handler.request(`users/${parsedTag}`)
    }

    clan(tag: string) {
        if (!tag.startsWith('#')) throw new TypeError('The tag must start with #')
        const parsedTag = tag.replace('#', '%23')

        return this.handler.request(`clans/${parsedTag}`)
    }

    clanWar(tag: string) {
        if (!tag.startsWith('#')) throw new TypeError('The tag must start with #')
        const parsedTag = tag.replace('#', '%23')
        
        return this.handler.request(`clans/${parsedTag}/currentwar`)
    }
}