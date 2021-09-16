import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import { collections as allCollections } from '~/api/config'

export default defineComponent({
  setup() {
    const collections = ref()
    const collection = ref()

    useFetch(() => {
      collections.value = allCollections
      collection.value = collections.value[0]
    })

    return { collections, collection }
  },
})
