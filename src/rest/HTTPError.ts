export class HTTPError extends Error {
    status: number
    message: string;

    constructor(error: any, resStatus: number) {
        super()

        const status = resStatus.toString()

        this.message = error[status] 
        this.status = resStatus
    }

    
}

export const playerErrors = {
    '-1000': "User tag parse failed",
    '-1001': "User not found",
    '-1002': "This user have no clan"
}

export const clanWarErrors = {
    '-1000': "Clan tag parse failed",
    '-1001': "Clan current war not found"
}

export const clanErrors = {
    '-1000': "Clan tag parse failed",
    '-1001': "Clan not found"
}

export const warLogPrivate = {
    '-1000': "War log is private"
}
