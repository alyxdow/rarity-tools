import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
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

      randomApes.value = await getRandomApes(selectedCollection.value, 9)
    }

    useFetch(() => {
      toggleCollection('Bored Ape Tron Club')
    })

    return { randomApes, actualCollection, collections, toggleCollection }
  },
})
