import { defineComponent, ref, onMounted, useContext, computed } from '@nuxtjs/composition-api'
import { sortBy } from 'lodash'
import { getApes, getRandomApes } from '~/api/apes'
import { collections } from '~/api/config'
import { Collection } from '~/types'

export default defineComponent({
  setup() {
    const randomApes = ref()
    const selectedCollection = ref()
    const { store } = useContext()

    const toggleCollection = async (collection: Collection) => {
      selectedCollection.value = collection

      randomApes.value = sortBy(await getApes(selectedCollection.value), 'tokenId')?.slice(0, 20)

      // Show them in random position
      // randomApes.value = await getRandomApes(selectedCollection.value, 3)
    }

    const getMoreApes = async (numberOfApes: number, limit: number) => {
      if (randomApes.value.length >= limit) return

      // const newApes = await getRandomApes(selectedCollection.value, numberOfApes)
      const newApes = await sortBy(await getApes(selectedCollection.value), 'tokenId')?.slice(
        randomApes.value.length,
        randomApes.value.length + 20
      )
      randomApes.value = [...randomApes.value, ...newApes]
    }

    onMounted(() => {
      toggleCollection(collections[0])
    })

    const showApe = computed(() => store.state.ape)

    return { randomApes, collections, selectedCollection, toggleCollection, showApe, getMoreApes }
  },

  render: h => h(),
})
