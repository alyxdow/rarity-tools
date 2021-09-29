import { defineComponent, ref, useContext, useFetch, computed } from '@nuxtjs/composition-api'
import { calculateApeScorePoint } from '~/api/rarity'
import { Mutations } from '~/store/types'

export default defineComponent({
  props: ['ape'],

  setup(props) {
    // Nuxt variables / methods ----------------------------------------------------------------------------------------------|
    const { redirect, store } = useContext()

    // Fetch ape score from API ----------------------------------------------------------------------------------------------|
    const apeScore = ref()

    useFetch(async () => {
      if (!props.ape) return
      apeScore.value = await calculateApeScorePoint(props.ape)
    })

    // Handle user click -----------------------------------------------------------------------------------------------------|
    const evaluateApe = () => {
      store.commit(Mutations.CLEAR_APE_INFO)
      redirect(`/${props.ape.collection.value}/${props.ape.tokenId}`)
    }

    // Choose the right view -------------------------------------------------------------------------------------------------|
    const activeView = computed(() => store.state.activeView)

    // Return values ---------------------------------------------------------------------------------------------------------|
    return {
      apeScore,
      evaluateApe,
      activeView,
    }
  },
})
