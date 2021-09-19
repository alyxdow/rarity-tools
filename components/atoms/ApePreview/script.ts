import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import { calculateApeScorePoint } from '~/api/rarity'

export default defineComponent({
  props: ['ape'],

  setup(props) {
    const apeScore = ref()

    useFetch(async () => {
      if (!props.ape) return
      apeScore.value = await calculateApeScorePoint(props.ape)
    })

    return { apeScore }
  },
})
