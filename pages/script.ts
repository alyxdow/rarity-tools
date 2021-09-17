import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import { filter } from 'lodash'
import { getRandomApes } from '~/api/apes'
import { collections } from '~/api/config'

export default defineComponent({
  setup() {
    const randomApes = ref()
    const actualCollection = ref('Bored Ape Tron Club')
    const selectedCollection = filter(collections, { name: actualCollection.value })[0]

    useFetch(async () => {
      actualCollection.value = collections[0].name
      randomApes.value = await getRandomApes(selectedCollection, 9)
    })

    return { randomApes, actualCollection, collections }
  },
})
