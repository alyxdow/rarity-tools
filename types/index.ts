// prettier-ignore
export interface AllTraits {
  Fur            : string[]
  Hat            : string[]
  Eyes           : string[]
  Mouth          : string[]
  Clothes        : string[]
  Earring        : string[]
  Background     : string[]
  [index: string]: any | string[]
}

// prettier-ignore
export interface Trait {
  Fur       ?: string | number
  Hat       ?: string | number
  Eyes      ?: string | number
  Mouth     ?: string | number
  Clothes   ?: string | number
  Earring   ?: string | number
  Background?: string | number
}

export interface Apes {
  provenance: string
  collection: Ape[]
}

// prettier-ignore
export interface Ape {
  tokenId   : number
  image     : string
  imageHash : string
  traits    : Trait
  collection: Collection
}

export interface Collection {
  name?: string
  value: string
}

export interface ApeInfo {
  collection: Collection
  apeId: string | number
}
