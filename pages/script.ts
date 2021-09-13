import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import { getTraits, sumTraits } from '~/api/traits'

export default defineComponent({
  setup() {
    const sum = ref()
    useFetch(async () => {
      const traits = await getTraits('mutants')
      if (!traits) return

      sum.value = sumTraits(traits['Background'])
    })

    return { sum }
  },
})
