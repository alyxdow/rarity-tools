import { defineComponent, ref, useStore } from '@nuxtjs/composition-api'
import { filter } from 'lodash'
import { collections as allCollections } from '~/api/config'
import { Mutations } from '~/store/types'

export default defineComponent({
  setup() {
    const { getters, dispatch, commit } = useStore()

    const apeId = ref()
    const collection = ref('Bored Ape Tron Club')
    const collections = ref(getters.collectionsNames)
    const selectedCollection = filter(allCollections, { name: collection.value })[0]

    const evaluateApe = () => {
      commit(Mutations.CLEAR_APE_INFO)

      dispatch('evaluateApe', {
        apeId: apeId.value,
        collection: selectedCollection,
      })

      apeId.value = null
    }

    return { collections, collection, evaluateApe, apeId }
  },
})
