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

  loading     : false,
  error       : false
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

  [Mutations.SET_PROGRESS](state, progress) {
    state.error = false

    while (!progress) {
      state.loading = true
    }

    if (progress == null) return (state.error = true)

    state.loading = false
  },
}

export const actions: Actions = {
  async evaluateApe({ commit }: any, apeInfo) {
    commit(Mutations.SET_PROGRESS, false)

    const ape = await getApe(apeInfo.collection, apeInfo.apeId)
    if (!ape) return commit(Mutations.SET_PROGRESS, null)

    const apeRarity = await calculateApeRarity(ape)
    const apeScore = await calculateApeScorePoint(ape)

    const apeData = {
      ape,
      apeRarity,
      apeScore,
    }

    commit(Mutations.SET_APE, apeData)
    commit(Mutations.SET_PROGRESS, true)
  },
}
