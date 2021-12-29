import { Labels } from '../types'

export class Label {
    id: number
    name: string

    constructor(data: Labels) {
        this.id = data.id
        this.name = data.name
    }
}