export interface AllTraits {
  Fur: string[]
  Hat: string[]
  Eyes: string[]
  Mouth: string[]
  Clothes: string[]
  Earring: string[]
  Background: string[]
}

export interface Trait {
  Fur?: string
  Hat?: string
  Eyes?: string
  Mouth?: string
  Clothes?: string
  Earring?: string
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
  traits: Trait
}
