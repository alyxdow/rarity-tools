import { defineComponent, ref, useFetch, useStore } from '@nuxtjs/composition-api'
import { calculateApeScorePoint } from '~/api/rarity'
import { Mutations } from '~/store/types'

export default defineComponent({
  props: ['ape'],

  setup(props) {
    const apeScore = ref()

    useFetch(async () => {
      if (!props.ape) return
      apeScore.value = await calculateApeScorePoint(props.ape)
    })

    const { commit, dispatch } = useStore()
    const evaluateApe = () => {
      commit(Mutations.CLEAR_APE_INFO)

      dispatch('evaluateApe', {
        apeId: props.ape.tokenId,
        collection: props.ape.collection,
      })
    }

    return { apeScore, evaluateApe }
  },
})
