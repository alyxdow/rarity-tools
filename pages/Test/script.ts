import { defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { getApe } from '~/api/apes'
import { calculateApeRarity, calculateApeScorePoint } from '~/api/rarity'

export default defineComponent({
  setup() {
    const error = ref(false)
    const loading = ref(false)
    const ape = ref()
    const apeId = ref()
    const apeScore = ref()
    const apeRarity = ref()

    const filter = async () => {
      loading.value = true

      ape.value = await getApe('bored', +apeId.value)
      if (!ape.value) return (error.value = true)

      apeRarity.value = await calculateApeRarity(ape.value)
      if (!apeRarity.value) return (error.value = true)

      apeScore.value = await calculateApeScorePoint(ape.value)
      if (!apeScore.value) return (error.value = true)
      else loading.value = false
    }

    watch(apeId, () => (error.value = false))

    return { ape, apeId, filter, apeRarity, apeScore, loading, error }
  },
})
