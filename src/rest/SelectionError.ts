const message = {
    400: "You must select Original or Ultimate server in the Client"
}

export class SelectionError extends Error {
    message: string
    status: number

    constructor(status: number) {
        super()

        this.message = message[400]
        this.status = status
    }

}