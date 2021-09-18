import { map } from 'lodash'
import { getApe } from '~/api/apes'
import { collections } from '~/api/config'
import { calculateApeRarity, calculateApeScorePoint } from '~/api/rarity'
import { Actions, Getters, Mutations, MutationsInterface, State } from './types'

// prettier-ignore
export const state = (): State => ({
  ape         : null,
  apeRarity   : null,
  apeScore    : null,

  collections : collections,
})

export const getters: Getters = {
  collectionsNames: state => map(state.collections, 'name'),
}

export const mutations: MutationsInterface = {
  [Mutations.SET_APE](state, apeInfo) {
    state.ape = apeInfo.ape
    state.apeRarity = apeInfo.apeRarity
    state.apeScore = apeInfo.apeScore
  },
}

export const actions: Actions = {
  async evaluateApe({ commit }: any, apeInfo) {
    const ape = await getApe(apeInfo.collection, apeInfo.apeId)
    if (!ape) return alert(`Ape ${apeInfo.apeId} not found`)

    const apeRarity = await calculateApeRarity(ape)
    const apeScore = await calculateApeScorePoint(ape)

    if (apeRarity && apeScore && ape) {
      const apeData = {
        ape,
        apeRarity,
        apeScore,
      }

      commit(Mutations.SET_APE, apeData)
    }
  },
}
