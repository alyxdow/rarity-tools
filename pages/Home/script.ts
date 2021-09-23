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

      randomApes.value = await getRandomApes(selectedCollection.value, 3)

      // Show them in sorted by ID
      // randomApes.value = sortBy(await getApes(selectedCollection.value), 'tokenId')?.slice(0, 20)

      setInterval(() => {
        if (store.state.ape) return
        getMoreRandomApes(3, 12) // The image loading was too slow, divide this request made it faster
      }, 2000)
    }

    const getMoreRandomApes = async (numberOfApes: number, limit: number) => {
      if (randomApes.value.length >= limit) return

      const newApes = await getRandomApes(selectedCollection.value, numberOfApes)
      randomApes.value = [...randomApes.value, ...newApes]
    }

    onMounted(() => {
      toggleCollection(collections[0])
    })

    const showApe = computed(() => store.state.ape)

    return { randomApes, collections, selectedCollection, toggleCollection, showApe, getMoreRandomApes }
  },

  render: h => h(),
})
