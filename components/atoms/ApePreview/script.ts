import { defineComponent, ref, useContext, useFetch, useStore } from '@nuxtjs/composition-api'
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

    const { commit } = useStore()
    const { redirect } = useContext()
    const evaluateApe = () => {
      commit(Mutations.CLEAR_APE_INFO)

      redirect(`/${props.ape.collection.value}/${props.ape.tokenId}`)
    }

    return { apeScore, evaluateApe }
  },
})
