import fetch from "node-fetch";

export class RequestHandler {
    server: string

    constructor(server: string) {
        this.server = server.toLowerCase()
    }

    async request(path: string) {
        const res = await fetch(`https://api.magic.atrasis.net/${this.server}/${path}`, {
            method: 'GET'
        }).catch(() => null)

        const data = await res?.json().catch(() => null)

        return data
    }

}