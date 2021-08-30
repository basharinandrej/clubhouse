export interface ListenerInterface {
    name: string
}

export interface RoomCardInterface {
    id?: number
    title: string,
    avatars: string[]
    listeners: ListenerInterface[]
}