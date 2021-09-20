import { defineComponent, ref, Ref, useContext, computed, watch, onMounted, useStore, useRoute } from '@nuxtjs/composition-api'
import { filter } from 'lodash'
import { collections } from '~/api/config'
import { Mutations } from '~/store/types'

export default defineComponent({
  setup() {
    const store: any = useStore()
    const route = useRoute()

    onMounted(() => {
      const apeId = route.value.params.apeId
      const collection = filter(collections, { value: route.value.params.collection })[0]

      store.dispatch('evaluateApe', { apeId, collection })
    })

    const ape = computed(() => store.state.ape)
    const apeScore = computed(() => store.state.apeScore)
    const collectionsValues: any = {
      bored: 'default',
      mutants: 'mutant',
    }
    const collection = computed(() => {
      if (ape.value) {
        collectionsValues[store.state.ape.collection.value]
      }
    })

    const traits: Ref<any[]> = ref([])
    watch(ape, () => {
      if (ape.value) {
        for (const key in ape.value.traits) {
          const trait = ape.value.traits[key]
          if (trait) traits.value.push({ [key]: trait })
        }
      }
    })

    const { redirect } = useContext()
    const clearApe = () => {
      redirect('/')

      setTimeout(() => {
        store.commit(Mutations.CLEAR_APE_INFO)
        traits.value = []
      }, 3000)
    }

    return { ape, traits, apeScore, clearApe, collection }
  },

  transition: {
    name: 'ape',
    mode: 'out-in',
  },
})
