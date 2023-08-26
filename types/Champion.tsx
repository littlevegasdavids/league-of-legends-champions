type Info = {
    attack: number, 
    defense: number, 
    magic: number, 
    difficulty: number
}

export type Champion = {
    id: string,
    name: string, 
    tags: [string],
    title: string, 
    info: Info
}