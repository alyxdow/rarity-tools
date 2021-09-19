import { MutationTree } from 'vuex'
import { Ape, ApeInfo, Collection, Trait } from '~/types'

// prettier-ignore
export interface State {
  ape         : null | any | Ape    
  apeScore    : null | number 
  apeRarity   : null | Trait  

  collections : Collection[]
}

export interface Getters {
  collectionsNames: (s: State) => any[]
}

// prettier-ignore
export enum Mutations {
  SET_APE        = 'SET_APE'       ,
  CLEAR_APE_INFO = 'CLEAR_APE_INFO',
}

export type RootType = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootType> {
  [Mutations.SET_APE](s: State, p: any): void
  [Mutations.CLEAR_APE_INFO](s: State): void
}

export interface Actions {
  evaluateApe: (p: Ape, ...a: any) => void
}
