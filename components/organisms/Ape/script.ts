import { defineComponent, ref, Ref, useContext, computed } from '@nuxtjs/composition-api'
import { Mutations } from '~/store/types'

export default defineComponent({
  setup() {
    const error = ref(false)

    const { store } = useContext()

    const ape = computed(() => store.state.ape)
    const apeScore = computed(() => store.state.apeScore)
    const collections: any = {
      bored: 'default',
      mutants: 'mutant',
    }
    const collection = computed(() => collections[store.state.ape.collection.value])

    const traits: Ref<any[]> = ref([])
    for (const key in ape.value.traits) {
      const trait = ape.value.traits[key]
      if (trait) traits.value.push({ [key]: trait })
    }

    const clearApe = () => {
      traits.value = []
      store.commit(Mutations.CLEAR_APE_INFO)
    }

    return { error, ape, traits, apeScore, clearApe, collection }
  },
})
