import { defineComponent, ref, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const error = ref(false)

    const { store } = useContext()

    const ape = computed(() => store.state.ape)
    const apeScore = computed(() => store.state.apeScore)

    const traits: any[] = []
    for (const key in ape.value.traits) {
      const trait = ape.value.traits[key]
      traits.push({ [key]: trait })
    }

    return { error, ape, traits, apeScore }
  },
})
