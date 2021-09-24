import { defineComponent, ref, onMounted, useContext, computed } from '@nuxtjs/composition-api'
import { sortBy } from 'lodash'
import { getApes, getRandomApes } from '~/api/apes'
import { collections } from '~/api/config'
import { Collection } from '~/types'

export default defineComponent({
  setup() {
    const apes = ref()
    const selectedCollection = ref()
    const { store } = useContext()

    const toggleCollection = async (collection: Collection) => {
      selectedCollection.value = collection

      apes.value = sortBy(await getApes(selectedCollection.value), 'tokenId')?.slice(0, 3)

      // Show them in random position
      // apes.value = await getRandomApes(selectedCollection.value, 3)
    }

    const getMoreApes = async (numberOfApes: number, limit: number) => {
      if (apes.value.length >= limit) return

      // const newApes = await getRandomApes(selectedCollection.value, numberOfApes)
      const newApes = await sortBy(await getApes(selectedCollection.value), 'tokenId')?.slice(
        apes.value.length,
        apes.value.length + 9
      )
      apes.value = [...apes.value, ...newApes]
    }

    onMounted(() => {
      toggleCollection(collections[0])
    })

    const showApe = computed(() => store.state.ape)

    return { apes, collections, selectedCollection, toggleCollection, showApe, getMoreApes }
  },

  render: h => h(),
})
