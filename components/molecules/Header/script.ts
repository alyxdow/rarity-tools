import { defineComponent, ref, useContext, useStore, computed } from '@nuxtjs/composition-api'
import { filter } from 'lodash'
import { collections as allCollections } from '~/api/config'
import { Mutations } from '~/store/types'

export default defineComponent({
  setup() {
    const { getters, dispatch, commit } = useStore()

    const apeId = ref()
    const collection = ref('Bored Ape Tron Club')
    const collections = ref(getters.collectionsNames)
    const selectedCollection = computed(() => filter(allCollections, { name: collection.value })[0])

    const evaluateApe = () => {
      commit(Mutations.CLEAR_APE_INFO)

      dispatch('evaluateApe', {
        apeId: apeId.value,
        collection: selectedCollection.value,
      })

      apeId.value = null
    }

    const { redirect } = useContext()
    const goHome = () => {
      commit(Mutations.CLEAR_APE_INFO)
      redirect('/')
    }

    return { collections, collection, evaluateApe, apeId, goHome }
  },
})
