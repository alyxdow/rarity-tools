import { defineComponent, ref, useFetch, watch } from '@nuxtjs/composition-api'
import { map, filter } from 'lodash'
import { getApe } from '~/api/apes'
import { collections as allCollections } from '~/api/config'
import { calculateApeRarity, calculateApeScorePoint } from '~/api/rarity'

export default defineComponent({
  setup() {
    const collections = ref()
    const collection = ref()

    useFetch(() => {
      collections.value = map(allCollections, 'name')
      collection.value = collections.value[0]
    })

    const ape = ref()
    const apeId = ref()
    const apeScore = ref()
    const apeRarity = ref()

    const evaluateApe = async () => {
      const selectedCollection = filter(allCollections, { name: collection.value })[0]

      ape.value = await getApe(selectedCollection, +apeId.value)
      if (!ape.value) return alert(`Ape #${apeId.value} not found`)

      apeRarity.value = await calculateApeRarity(ape.value)
      apeScore.value = await calculateApeScorePoint(ape.value)

      console.log(ape.value)
      console.log(apeRarity.value)
      console.log(apeScore.value)
    }

    return { collections, collection, evaluateApe, apeId }
  },
})
