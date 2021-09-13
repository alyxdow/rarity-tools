export interface AllTraits {
  Fur: string[]
  Eyes: string[]
  Mouth: string[]
  Clothes: string[]
  Background: string[]
}

export interface Trait {
  Fur?: string
  Eyes?: string
  Mouth?: string
  Clothes?: string
  Background?: string
}

export interface Apes {
  provenance: string
  collection: Ape[]
}

export interface Ape {
  tokenId: number
  image: string
  imageHash: string
  traits: any[]
}
