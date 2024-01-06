export interface Spice {
    id: number,
    name: string,
    price: string,
    heat: number,
    color: string
}

export interface Blend {
    id: number,
    name: string,
    blends: number[],
    spices: number[],
    description: string
}