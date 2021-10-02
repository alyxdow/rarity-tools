import { defineComponent, ref, useContext, useFetch, useStore } from '@nuxtjs/composition-api'
import { calculateApeScorePoint } from '~/api/rarity'
import { Mutations } from '~/store/types'

export default defineComponent({
  props: ['nft', 'activeView'],

  setup(props) {
    const apeScore = ref(0)

    useFetch(async () => {
      if (!props.nft) return
      apeScore.value = await calculateApeScorePoint(props.nft)
    })

    const { commit } = useStore()
    const { redirect } = useContext()
    const evaluateApe = () => {
      commit(Mutations.CLEAR_APE_INFO)

      redirect(`/${props.nft.collection.value}/${props.nft.tokenId}`)
    }

    return { apeScore, evaluateApe }
  },
})
