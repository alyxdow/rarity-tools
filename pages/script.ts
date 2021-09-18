import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import { filter } from 'lodash'
import { getRandomApes } from '~/api/apes'
import { collections } from '~/api/config'

export default defineComponent({
  setup() {
    const randomApes = ref()
    const actualCollection = ref()
    const selectedCollection = ref()

    const toggleCollection = async (collectionName: string) => {
      actualCollection.value = collectionName
      selectedCollection.value = filter(collections, { name: actualCollection.value })[0]

      randomApes.value = await getRandomApes(selectedCollection.value, 3)
      getMoreRandomApes(6) // The image loading was too slow, divide this request made it faster
    }

    const getMoreRandomApes = (numberOfApes: number) => {
      setTimeout(async () => {
        const newApes = await getRandomApes(selectedCollection.value, numberOfApes)
        randomApes.value = [...randomApes.value, ...newApes]
      }, 100)
    }

    onMounted(() => {
      toggleCollection('Bored Ape Tron Club')
    })

    return { randomApes, actualCollection, collections, toggleCollection }
  },
})
